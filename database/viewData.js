const RecommendedItem = require('./RecommendedItem.js');
const mongoose = require('mongoose');

RecommendedItem.find((err, vals) => {
  console.log(vals);
  console.log('length of items is', vals.length);
  mongoose.disconnect();
});
