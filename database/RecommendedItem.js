const mongoose = require('mongoose');
const db = require('./index.js');

const itemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  brand: String,
  department: String,
  price: Number,
  imageUrl: String,
  productUrl: String,
});

const RecommendedItem = mongoose.model('RecommendedItem', itemSchema);

module.exports = RecommendedItem;
