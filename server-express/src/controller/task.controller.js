const Task = require('../model/task.model.js');

function createTask(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: 'У задачи должен быть контент',
    });
  }

  const task = new Task({
    title: req.body.title,
    body: req.body.body,
  });

  Task.create(task, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Произошла ошибка во время добавления задачи',
      });
    } else {
      res.send(data);
    }
  });
}

function getTasks(req, res) {
  Task.getTasks((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Произошла ошибка во время получения задач',
      });
    } else {
      res.send(data);
    }
  });
}

function deleteTask(req, res) {
  Task.deleteTask(req.params.taskId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Произошла ошибка во время удаления задачи',
      });
    } else {
      res.send(data);
    }
  });
}

module.exports = {
  createTask: createTask,
  getTasks: getTasks,
  deleteTask: deleteTask,
};
