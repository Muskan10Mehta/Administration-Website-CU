Current version : v14.17.0
This website is made using Nodejs and ReactJs. You will have to install the foollowing dependecies:

1.  Install Nodejs.
    Open the official page for Node.js downloads(https://nodejs.org/en/download/) and download Node.js for Windows by clicking the "Windows Installer" option
    Run the downloaded Node.js .msi Installer - including accepting the license, selecting the destination, and authenticating for the install.

        This requires Administrator privileges, and you may need to authenticate

To ensure Node.js has been installed, run node -v in your terminal - you should get something like v6.9.5
Update your version of npm with: npm install npm --global

    This requires Administrator privileges, and you may need to authenticate

Note: if this doesnt work, You may have to add PATH in the Environment variables

1. Go to settings->
2. Search for Environment Variables->
3. Edit Enviornment variables->
4. under advanced tab select the option for Environment Variables..->
5. under User Variables click on New...
6. add the variable name nodejs and browse for the bin folder in the Nodejs folder you downloaded the path will look like this:
   C:\Program Files\nodejs\node_modules\npm\bin\
7. Save all changes

To run the website:

1. Extract all files
2. Open terminal and cd Cuweb-master/Cuweb-master

paste the following commands in the terminal

npm i
or
npm intall
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install tailwind-scrollbar-hide
npm install @heroicons/react
npm install @headlessui/react

To run the website on local host

npm start

//this command usually runs the webpage on port 3000 and if 3000 is busy it will ask permission to run it on port 3001 please press y when it asks so. Any changes made while the page is running on local host are automatically reflected on save.

To Run build

npm run build
serve -s build

//this command usually runs the webpage on port 5000 or 5001 is former is busy, any changes made while the page is runnning are not reflected until the build command is run again, it gives two addresses to run the webpage one for local host and another to open the webpage on your network.

if there is any error with tailswind please refer to Tailswind installation docs
https://tailwindcss.com/docs/installation

we have used: "Installing Tailwind CSS as a PostCSS plugin" document in this website

Common Errors:

node modules arent installed. (install using npm install)
package.json is missing (same command as above)

Official Readme File contents:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
