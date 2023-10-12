const express = require("express");
const {getAllTodo} = require("../controllers/todo.controller");
const router = express.Router();

router.get("/", getAllTodo);

module.exports = router;
