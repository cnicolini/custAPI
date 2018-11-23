'use strict';

module.exports = function(app) {
  var customerService = require('../services/customerService');

  // Routes
  app.route('/customer')
    .get(customerService.listAllCustomers)
    .post(customerService.createCustomer);

  app.route('/customer/:customerId')
    .get(customerService.readCustomer)
    .put(customerService.updateCustomer)
    .delete(customerService.removeCustomer);

}
