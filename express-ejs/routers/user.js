var express = require("express");

/* GET users listing. */
const user = require("../controller/user.controller");
const multer = require("multer");
const upload = multer({ dest: "./public/user_upload" });
var router = require("express").Router();

// Create a new Tutorial
router.post("/", user.create);

// Retrieve all user
router.get("/", user.findAll);

// Retrieve all published user
router.get("/active", user.findAllActive);

// Retrieve a single Tutorial with id
router.get("/:id", user.findOne);

// Update a Tutorial with id
router.put("/:id", user.update);

// Delete a Tutorial with id
router.delete("/:id", user.delete);

// Delete all user
router.delete("/", user.deleteAll);

//upload file
router.post("/upload", upload.single("file"), function (req, res) {
  console.log("file upload!!");
  const title = req.body.title;
  const file = req.file;
  console.log("file");
  console.log(title);
  console.log(file);
  res.sendStatus(200);
});

module.exports = router;
