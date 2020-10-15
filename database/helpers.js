const RecommendedItem = require('./RecommendedItem.js');

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};

const getDept = (dept, callback = (result) => result) => {
  let department = formatName(dept);
  RecommendedItem.find({ department }, callback);
};

const getBrands = (brandName, callback = (result) => result) => {
  let brandWords = brandName.split(/[,.\s-&amp]/);
  let $regex = `^${brandWords.join('.*\s*')}$`;
  let $options = 'i'
  RecommendedItem.find({ brand: { $regex, $options }}, callback);
};

const getPrices = ($gte = 0, $lte = 1000, callback = (result) => result) => {
  RecommendedItem.find({ price: { $gte, $lte } }, callback);
};

const getProduct = (id, callback = (result) => result) => {
  id = parseInt(id);
  RecommendedItem.findOne({ id }, callback);
}

const deleteProduct = (id, callback = (result) => result) => {
  id = parseInt(id);
  RecommendedItem.deleteOne({ id }, callback);
}

const createProduct = (obj, callback = (result) => result) => {
  RecommendedItem.create(obj, callback);
}

const updateProduct = ({ id, title, brand, department, price, imageUrl, productUrl }, callback = (result) => result) => {
  id = parseInt(id);
  RecommendedItem.updateOne({ id }, { title, brand, department, price, imageUrl, productUrl }, callback);
}

module.exports.getDept = getDept;
module.exports.getBrands = getBrands;
module.exports.getPrices = getPrices;
module.exports.getProduct = getProduct;
module.exports.deleteProduct = deleteProduct;
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;