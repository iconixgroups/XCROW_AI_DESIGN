const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectCode: {
    type: String,
    required: true,
    unique: true
  },
  projectName: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  files: [{
    type: String,
    required: true
  }],
  quantityData: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
});

module.exports = mongoose.model('Project', ProjectSchema);