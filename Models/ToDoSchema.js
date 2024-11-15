const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    
    text: {
        type: String,
        required: true
    }
});


const ToDoModel = mongoose.model('ToDo', ToDoSchema);
module.exports = ToDoModel;
