let Todo = require("../models/todo.model");

async function getAllTodo_service() {
    let todos = await Todo.find();
    return todos;
}

module.exports = {
    getAllTodo_service
}