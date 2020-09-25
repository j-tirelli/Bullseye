const express = require('express');
const PORT = 3001;
const RecommendedItem = require('../database/RecommendedItem.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  let firstBrandWord = formatName(req.params.brandName).split(' ')[0];
  RecommendedItem.find({ brand: {$regex: '^' + firstBrandWord}}, (err, results) => {
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

app.listen(PORT, () => {
  console.log('running on port', PORT);
});

const formatName = (string) => {
  return string[0].toUpperCase() + string.split('').slice(1).join('');
};
