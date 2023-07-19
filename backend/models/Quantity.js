const mongoose = require('mongoose');

const QuantitySchema = new mongoose.Schema({
  projectCode: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  quantityData: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('Quantity', QuantitySchema);