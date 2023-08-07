var express = require("express");
var fs = require("firebase-admin");
const db = fs.firestore();
const routeLabel = require("route-label");
const router = express.Router();
const namedRouter = routeLabel(router);
const UserController = require("../controllers/user.controller");
const userCollection = "users";

router.get("/register", UserController.signup);

router.get("/login", UserController.login);
router.get("/uploadFileToGalary", UserController.uploadFileToGalary);

/* GET users listing. */
router.get("/", UserController.userlist);

router.get("/:id", UserController.userdetail);

router.post("/register", UserController.createuser);
router.get("/remove/:id" , UserController.deleteuser);
router.post("/uploadFileToShow" , UserController.uploadFileToShow);

module.exports = router;
