const express = require('express');
const app = express();
const stripeRoutes = express.Router();
const configKey = require("../config/stripe")

const stripe = require('stripe')(configKey.stripe);

const STRIPE_PAGINATION_LIMIT = 100;

stripeRoutes.route('/customers').get((req, res) => {
  const options = { limit: STRIPE_PAGINATION_LIMIT }
  if(req.query.starting_after)
    options.starting_after = req.query.starting_after

  if(req.query.ending_before)
    options.ending_before = req.query.ending_before

  stripe.customers.list(
    options,
    function(err, result) {
      // asynchronously called
      console.log(err)
      if(!err){
        res.json(result);
      }
    }
  );
});


stripeRoutes.route('/charges').get((req, res) => {
  const options = { limit: STRIPE_PAGINATION_LIMIT }
  if(req.query.starting_after)
    options.starting_after = req.query.starting_after

  if(req.query.ending_before)
    options.ending_before = req.query.ending_before

  stripe.charges.list(
    options,
    function(err, result) {
      // asynchronously called
      if(!err){
        res.json(result);
      }
    }
  );
});

stripeRoutes.route('/customers/:customerId').get((req, res) => {
  stripe.customers.retrieve(
    req.params.customerId,
    function(err, customer) {
      if(!err){
        res.json(customer);
      }
    }
  );
});

stripeRoutes.route('/balance').get((req, res) => {
  stripe.balance.retrieve(function(err, balance) {
      if(!err){
        res.json(balance);
      }
    }
  );
});

module.exports = stripeRoutes;
