const connection = require('../db.connection.js');

const Task = function (task) {
  this.id = task.id;
  this.title = task.title;
  this.body = task.body;
};

Task.create = (newTask, result) => {
  connection.query('INSERT INTO TASK SET ?', newTask, (err, res) => {
    if (err) {
      console.log(`error: ${err}`);
      result(err, null);
      return;
    }

    console.log(`Задача добавлен с id = ${res.insertId}`);
    newTask.id = res.insertId;
    result(null, newTask);
  });
};

Task.getTasks = (result) => {
  connection.query('SELECT * FROM TASK', (err, res) => {
    if (err) {
      console.log(`error: ${err}`);
      result(err, null);
      return;
    }

    console.log('Список задач получен');
    result(null, res);
  });
};

Task.deleteTask = (taskId, result) => {
  connection.query('DELETE FROM TASK WHERE id=?', taskId, (err, res) => {
    if (err) {
      console.log(`error: ${err}`);
      result(err, null);
      return;
    }

    console.log(`Задача c id = ${taskId} была успешно удалена`);
    result(null, res);
  });
};

module.exports = Task;
