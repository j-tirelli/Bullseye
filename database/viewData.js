const RecommendedItem = require('./RecommendedItem.js');
const mongoose = require('mongoose');

RecommendedItem.find((err, vals) => {
  let depts = {};
  let brands = {};
  vals.forEach(val => {
    depts[val.department] = true;
    brands[val.brand] = true;
  });
  console.log('list of depts: ', Object.keys(depts));
  console.log('list of brands: ', Object.keys(brands));
  console.log('length of items is', vals.length);
  mongoose.disconnect();
});
