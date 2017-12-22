'use strict';

var mongoose = require('mongoose'),
    Quote = mongoose.model('Quotes');

exports.list_all_quotes = (req,res) => {
  Quote.find({}, (err, quotes) => {
    if (err)
      res.send(err);
    res.json(quotes);
  });
};

exports.add_a_quote = (req, res) => {
  console.log('req body here -- ', req.body);
  var new_quote = new Quote(req.body);
  new_quote.save((err, quote) => {
    // console.log('quote here:: ', quote);
    if (err)
      res.send(err);
    res.json(quote);
  });
};

exports.read_a_quote = (req,res) => {
  Quote.findById(req.params.quoteId, (err, quote) => {
    if (err)
      res.send(err);
    res.json(quote);
  });
};

exports.update_a_quote = (req, res) => {
  Quote.findOneAndUpdate({_id: req.params.quoteId}, req.body, {new: true}, (err, quote) => {
    if (err)
      res.send(err);
    res.json(quote);
  });
};

exports.delete_a_quote = (req,res) => {
  Quote.remove({
    _id: req.params.quoteId
  }, (err, quote) => {
    if (err)
      res.send(err);
    res.json({message: 'Quote successfully deleted'});
  });
};
