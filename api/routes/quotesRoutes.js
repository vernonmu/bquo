'use strict';
module.exports = function(app) {
  var bquo = require('../controllers/quotesController');

  //quotes Routes
  app.route('/quotes')
    .get(bquo.list_all_quotes)
    .post(bquo.add_a_quote);

  app.route('/quotes/:quoteId')
    .get(bquo.read_a_quote)
    .put(bquo.update_a_quote)
    .delete(bquo.delete_a_quote);
};
