'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the customer'
  },
  address: {
    type: String,
    required: 'Enter the address'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'approved', 'rejected']
    }],
    default: 'pending'
  }
});

module.exports = mongoose.model('Customer', customerSchema);
