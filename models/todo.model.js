let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TodoSchema = {
    title: { type: String},
    completed: { type: Boolean},
};

module.exports = mongoose.model("Todo", TodoSchema);
