'use strict';

var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

exports.listAllCustomers = function(req, res) {
  Customer.find({}, function(err, customer) {
    if (err) {
      res.send(err)
    };
    res.json(customer);
  });
};

exports.createCustomer = function(req, res) {
  var customer = new Customer(req.body);
  customer.save(function(err, customer) {
    if (err) {
      res.send(err);
    }
    res.json(customer);
  });
}

exports.readCustomer = function(req, res) {
  var customerId = req.params.customerId;
  Customer.findById(customerId, function(err, customer) {
    if (err) {
      res.status(404).send(err);
    }
    res.json(customer);
  });
};

exports.updateCustomer = function(req, res) {
  var customerId = req.params.customerId;
  Customer.findOneAndUpdate({_id: customerId}, req.body, {new: true}, function(err, customer) {
    if (err) {
      res.status(404).send(err);
    }
    res.json(customer);
  });
};

exports.removeCustomer = function(req, res) {
  var customerId = req.params.customerId;
  Customer.remove({_id: customerId}, function(err, customer) {
      if (err) {
        res.status(404).send(err);
      }
      res.json({ message: 'Customer successfully removed' });
  });
};
