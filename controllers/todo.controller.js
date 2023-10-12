let todoService = require('../services/todo.service');
const {getAllTodo_service} = require("../services/todo.service");
async function getAllTodo  (req, res, next) {
    let todos = await getAllTodo_service();
    // let todos = [];
    return res.status(200).json(todos);
}

module.exports = {
    getAllTodo
}