const RecommendedItem = require('../database/RecommendedItem.js');

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};

const getDept = (dept, callback) => {
  let formattedDept = formatName(dept);
  RecommendedItem.find({ department: formattedDept }, callback);
}

const getBrands = (brandName, callback) => {
  let brandWords = brandName.split(/[,.\s-&amp]/);
  RecommendedItem.find({ brand: {$regex: `^${brandWords.join('.*\s*')}$`, $options: 'i'}}, callback);
}


module.exports.getDept = getDept;
module.exports.getBrands = getBrands;