const RecommendedItem = require('../database/RecommendedItem.js');

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};

const getDept = (dept, callback = (result) => result) => {
  let formattedDept = formatName(dept);
  return RecommendedItem.find({ department: formattedDept }, callback);
};

const getBrands = (brandName, callback = (result) => result) => {
  let brandWords = brandName.split(/[,.\s-&amp]/);
  return RecommendedItem.find({ brand: {$regex: `^${brandWords.join('.*\s*')}$`, $options: 'i'}}, callback);
};

const getPrices = (min = 0, max = 1000, callback = (result) => result) => {
  return RecommendedItem.find({ price: { $gte: min, $lte: max } }, callback);
};


module.exports.getDept = getDept;
module.exports.getBrands = getBrands;
module.exports.getPrices = getPrices;