const express = require('express');
const router = require('express').Router();

const leave = require("../controller/leave.controller");

// Create a new Tutorial
router.post("/", leave.create);

// Retrieve all leave
router.get("/", leave.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", leave.findOne);

// Update a Tutorial with id
router.put("/:id", leave.update);

// Delete a Tutorial with id
router.delete("/:id", leave.delete);

// Delete all leave
router.delete("/", leave.deleteAll);

module.exports = router;