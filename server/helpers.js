const RecommendedItem = require('../database/RecommendedItem.js');

const getDept = (dept, callback) => {
  let formattedDept = formatName(dept);
  RecommendedItem.find({ department: formattedDept }, callback);
}

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};

module.exports.getDept = getDept;