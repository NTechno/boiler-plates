import * as React from "react";
import Layout from "../components/layout/layout";
import { Router } from "@reach/router";
import Login from "./login";
import Home1 from "./home1";
import UserProfile from "./userProfile";
import UserList from "./userList";
import "../style/global.css";
import Register from "./register";
import Dashboard from "./dashboard";
import ArticleList from "./articleList";

const IndexPage = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Login path="/login" />
        <Register path="/register" />
        {/* <Home1 path="/dashboard" /> */}
        <Dashboard path="/dashboard" />
        <UserList path="/user-list" />
        <UserProfile path="/user-profile" />
        <ArticleList path="/article-list" />
      </Router>
    </Layout>
  );
};

export default IndexPage;
