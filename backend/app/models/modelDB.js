'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  isMade: {
    type: Boolean,
    required: true
  },
});

module.exports = mongoose.model('tasks', TaskSchema);