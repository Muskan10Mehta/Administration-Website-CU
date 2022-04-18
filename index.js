const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const envfile = require("envfile");
const { basename } = require("path");

const sourcePath = path.resolve(__dirname, ".env");
let parsedFile = envfile.parseFileSync(sourcePath);
let loggedIn = false;
let PORT = process.env.PORT || 80;
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//MULTER
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const folder = req.body.category;
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/${folder}/${file.originalname}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1].split(".")[3] === "document") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "mp4") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "jpeg") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "png") {
    cb(null, true);
  } else if (file.mimetype.split("/")[1] === "jpg") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

//FILE HANDLING
app.post("/api/uploadFile", upload.single("myFile"), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file selected");
  }
  res.redirect("/dashboard");
});

app.get("/api/deleteFile/:Category/:File", (req, res) => {
  const Category = req.params.Category;
  const File = req.params.File;
  let fileName = File.split(".")[0];
  let fileext = File.split(".")[1] || "";
  let file = `${__dirname}/public/files/${Category}/${File}.pdf`;

  if (
    fileext === "mp4" ||
    fileext == "docx" ||
    fileext === "png" ||
    fileext === "jpg" ||
    fileext === "jpeg"
  ) {
    file = `${__dirname}/public/files/${Category}/${fileName}.${fileext}`;
  }
  fs.unlink(file, (err) => {
    if (err) {
      return res.json({ status: "error", error: "File not found" });
    }
    res.redirect("/dashboard");
  });
});

//GET ALL FILES

app.get("/api/cat/:Category", (req, res) => {
  const Category = req.params.Category;
  const files = fs
    .readdirSync(`${__dirname}/public/files/${Category}`)
    .map((fileName) => {
      return {
        Category: Category,
        name: path.basename(fileName, ".pdf"),
        //ext:path.extname(fileName).split('.')[1],
        url: `/${Category}/${fileName}`,
      };
    });
  res.send(files);
});

app.get("/:Category/:file", (req, res) => {
  const cat = req.params.Category;
  const pdfs = req.params.file;
  res.sendFile(__dirname + `/public/files/${cat}/${pdfs}`);
});

//AUTHENTICATION
app.post("/api/locked/changePassword", (req, res) => {
  let newp = bcrypt.hashSync(req.body.pass, 10);

  parsedFile.PASSWORDCUAM = newp;
  fs.writeFileSync("./.env", envfile.stringifySync(parsedFile));

  res.send(true);
});

app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  let isPasswordValid = bcrypt.compareSync(password, parsedFile.PASSWORDCUAM);
  if (email !== process.env.USERNAMECUAM) {
    return res.json({ status: "error", error: "Invalid login" });
  }
  if (!isPasswordValid) {
    return res.json({ status: "error", error: "Invalid login" });
  }
  loggedIn = true;
  return res.status(200).json({ passed: true });
});

app.post("/api/logout", (req, res) => {
  if (loggedIn) {
    loggedIn = false;
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);

app.listen(PORT, () => {
  console.log("BE started at port " + PORT);
});

module.exports = app;
