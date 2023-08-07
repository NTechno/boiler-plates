import { React } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/login";
import SignUp from "./pages/signup";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/forgetPass" element={<Login />}></Route>
    </Routes>
  );
}
