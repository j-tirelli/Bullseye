const RecommendedItem = require('./RecommendedItem.js');

RecommendedItem.find((err, vals) => {
  console.log(vals);
});
