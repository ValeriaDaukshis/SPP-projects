const controller = require('../controllers/controller');
module.exports = function(app, db) {
  controller(app, db);
};