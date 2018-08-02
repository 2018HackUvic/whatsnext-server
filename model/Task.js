const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Basic Schema for a task
const taskSchema = new Schema({
  name: String,
  duration: Number,
  created_at: {type: Date, default: Date.now}, //Default is the date of creation 
  due_at: Date,
  priority: Number
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;