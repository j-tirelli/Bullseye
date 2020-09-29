const express = require('express');
const RecommendedItem = require('../database/RecommendedItem.js');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', (req, res) => {
  console.log('GOT a GET');
});

app.get('/products/dept/:dept', (req, res) => {
  let formattedDept = formatName(req.params.dept);
  RecommendedItem.find({ department: formattedDept }, (err, results) => {
    res.json(results);
  });
});

app.get('/products/brand/:brandName', (req, res) => {
  // escape certain characters from request url
  let brandWords = req.params.brandName.split(/[,.\s-&amp]/);
  RecommendedItem.find({
    brand: {$regex: `^${brandWords.join('.*\s*')}$`, $options: 'i'}}, (err, results) => {
    res.json(results);
  });
});

app.get('/products/price/min=:minPrice&max=:maxPrice', (req, res) => {
  RecommendedItem.find({
    price: {
      $gte: req.params.minPrice || 0,
      $lte: req.params.maxPrice || 1000 }
    }, (err, results) => {
      res.json(results);
    }
  );
});

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};

module.exports = app;
