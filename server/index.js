const express = require('express');
const RecommendedItem = require('../database/RecommendedItem.js');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const helpers = require('../database/helpers.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

// ////////////////////////Get Requests////////////////////////////// //

app.get('/products/dept/:dept', (req, res) => {
  helpers.getDept(req.params.dept, (err, results) => {
    res.json(results);
  });
});

app.get('/products/brand/:brandName', (req, res) => {
  helpers.getBrands(req.params.brandName, (err, results) => {
    res.json(results);
  });
});

app.get('/products/price/min=:minPrice&max=:maxPrice', (req, res) => {
  helpers.getPrices(req.params.minPrice, req.params.maxPrice, (err, results) => {
    res.json(results);
  });
});

app.get('/products/id/:productId', async (req, res) => {
  helpers.getProduct(req.params.productId, (err, searchedProduct) => {
    if (err) {
      console.error(err);
      res.send('Error Caught at findOne a callback');
    } else {
      helpers.getDept(searchedProduct.department, (err, results) => {
        if (err) {
          console.error(err);
          res.send('Error Caught at get department');
        } else {
          res.json(results);
        }
      });
    }
  });
});

app.get('/products/id/product/:productId', async (req, res) => {
  helpers.getProduct(req.params.productId, (err, searchedProduct) => {
    if (err) {
      console.error(err);
      res.send('Error Caught at findOne a callback');
    } else {
      res.json(searchedProduct);
    }
  });
});

// ////////////////////////Delete Requests////////////////////////////// //

app.delete('/products/id/product/:productId', async (req, res) => {
  helpers.deleteProduct(req.params.productId, (err, deletedProduct) => {
    if (err) {
      console.error(err);
      res.send('Error Caught at findOne a callback');
    } else {
      console.log(deletedProduct)
      res.send(`Success! Item  was removed!`)
    }
  });
});

// ////////////////////////Post Requests////////////////////////////// //

app.post('/products/id/product/:productId', async (req, res) => {
  let obj = req.body;
  obj.id = req.params.productId;
  obj.productUrl = '/' + (Number(obj.id) + 1);
  helpers.createProduct(obj, (err, createdProduct) => {
    if (err) {
      console.error(err);
      res.send('Error Caught at findOne a callback');
    } else {
      console.log(createdProduct)
      res.send(`Success! Item  was created!`)
    }
  });
});


module.exports = app;
