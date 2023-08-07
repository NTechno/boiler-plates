const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var connection = require("./mysql.config");
var apiRoute = require("./routers");
const app = express();
const port = 3200;
app.set("view engine", "ejs");

const user = [
  {
    name: "Nidhi Gadhavi",
    role: "employee",
    city: "Ahemedabad",
    occupation: "Software Engineer",
  },
  {
    name: "Riddhi Gadhavi",
    role: "Team Lead",
    city: "Ahemedabad",
    occupation: "Software Engineer",
  },
  {
    name: "Krupa Gadhavi",
    role: "Trainee",
    city: "Ahemedabad",
    occupation: "Software Engineer",
  },
];
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api.v1", apiRoute);

app.get("/", (req, res) => {
  res.render("pages/index.ejs", { user });
});

app.get("/register", (req, res) => {
  res.render("pages/register.ejs");
});

app.get("/users", (req, res) => {
  res.render("pages/index.ejs");
});

app.get("/login", (req, res) => {
  res.render("pages/login.ejs");
});

app.post("/register", (req, res) => {
  console.log("register user", res);
  res.render("pages/index.ejs", { user });
});
app.listen(port, () => {
  console.log("App is listning port 3200");
});
