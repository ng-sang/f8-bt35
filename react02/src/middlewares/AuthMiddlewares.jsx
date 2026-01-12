import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthMiddlewares() {
  const isAuth = localStorage.getItem("is_login") ? true : false;
  return isAuth ? <Outlet /> : <Navigate to={"/Login"} />;
}
