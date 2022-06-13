import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    axios
      .post("/api/logout")
      .then((res) => {
        if (res.data === true) {
          localStorage.clear();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
