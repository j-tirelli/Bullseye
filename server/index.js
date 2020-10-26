const express = require('express');
const path = require('path');
const cors = require('cors');
const helpers = require('../postgres/helpers.js');
const payload = require('../tests/payload.json');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

// ////////////////////////Get Requests////////////////////////////// //


app.get('/loaderio-ef5fd1d1ea935ab4dda1f3cfaf6f910a', async (req, res) => {
  res.status(200).send('loaderio-ef5fd1d1ea935ab4dda1f3cfaf6f910a');
});

app.get('/loaderio/payload.json', async (req, res) => {
  res.status(200).json(payload);
});

app.get('/products/id/:productId', async (req, res) => {
  helpers.getProduct(req.params.productId)
    .then(product => {
      helpers.getLikeDept(product.department)
        .then(product => {
          res.status(200).json(product);
        })
        .catch(err => {
          console.error(err)
          res.status(503).send('Error Caught at get department');
        });
    })
    .catch(err => {
      console.error(err)
      res.status(503).send('Error Caught at getProducts findOne callback');
    });
});

app.get('/products/id/product/:productId', async (req, res) => {
  helpers.getProduct(req.params.productId)
    .then((searchedProduct) => {
      res.status(200).json(searchedProduct);
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at getProduct findOne callback');
    });
});

// ////////////////////////Delete Requests////////////////////////////// //

app.delete('/products/id/product/:productId', async (req, res) => {
  helpers.deleteProduct(req.params.productId)
  .then((result) => {
    res.status(200).json(result.rows[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at delete callback');
    });
});

// ////////////////////////Post Requests////////////////////////////// //

app.post('/products/id/product/', async (req, res) => {
  let obj = req.body;
  helpers.createProduct(obj)
    .then((result) => {
      res.status(200).json(result.rows[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at create callback');
    });
});

// ////////////////////////Put Requests////////////////////////////// //

app.put('/products/id/product/:productId', async (req, res) => {
  let obj = req.body;
  obj.id = req.params.productId;
  helpers.updateProduct(obj)
  .then((result) => {
    res.status(200).json(result.rows[0])
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at update callback');
    });
});

module.exports = app;
