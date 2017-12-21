'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
  text: {
    type: String,
    required: 'Kindly enter the quote'
  },
  author: {
    type: String,
    required: 'Please enter the author'
  },
  tags: {
    type: Array
  },
  category: {
    type: String,
    required: 'Please enter the category'
  },
  date: {
    type: String,
    required: 'Please enter the date'
  },
  background: {
    type: String
  },
  added_by: {
    type: String
  },
  added_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quotes', QuotesSchema)
