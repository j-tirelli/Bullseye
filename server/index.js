const express = require('express');
const PORT = 3001;
const RecommendedItem = require('../database/RecommendedItem.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('GOT a GET');
});

app.get('/products/:dept', (req, res) => {
  let formattedDept = req.params.dept[0].toUpperCase() + req.params.dept.split('').slice(1).join('');
  RecommendedItem.find({ department: formattedDept }, (err, results) => {
    res.json(results);
  });
})

app.listen(PORT, () => {
  console.log('running on port', PORT);
});
