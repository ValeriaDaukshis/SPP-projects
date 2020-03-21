'use strict';

module.exports = function(app) {
  var controller = require('../controllers/controller');
  console.log("index");

  app.route('/tasks').get(controller.getAllTasks);
  app.route('/tasks/:id').get(controller.getTaskById);

  app.route('/task').post(controller.createTask);
  app.route('/task/:id').put(controller.updateTask);
  app.route('/task/:id/status/:statusBool').put(controller.changeTaskStatus);

  app.route('/task/:id').delete(controller.deleteTask);
};