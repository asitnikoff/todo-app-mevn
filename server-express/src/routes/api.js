const express = require('express');
const {
  createTask,
  getTasks,
  deleteTask,
} = require('../controller/task.controller.js');

const apiRouter = express.Router();

apiRouter.get('/tasks', getTasks);

apiRouter.post('/tasks', createTask);

apiRouter.get('/tasks/:taskId', (req, res) => {
  res.send({
    message: `GET Task with id ${req.params.taskId}`,
  });
});

apiRouter.delete('/tasks/:taskId', deleteTask);

module.exports = apiRouter;
