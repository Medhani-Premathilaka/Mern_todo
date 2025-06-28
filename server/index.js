const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Todo Model
const Todo = mongoose.model('Todo', {
  text: String,
  completed: Boolean
});

// Routes
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: false
  });
  await todo.save();
  res.json(todo);
});

app.listen(5000, () => console.log('Server running on port 5000'));
