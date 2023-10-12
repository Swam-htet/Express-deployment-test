const express = require("express");
const router = express.Router();

const {getAllTodo} = require("../controllers/todo.controller");

router.get("/", getAllTodo);

module.exports = router;
