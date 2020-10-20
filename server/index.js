const express = require('express');
const path = require('path');
const cors = require('cors');
// const helpers = require('../mongo/helpers.js');
const helpers = require('../postgres/helpers.js');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

// ////////////////////////Get Requests////////////////////////////// //

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
    .then(() => {
      res.status(204).send(`Success! Item  was removed!`);
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at delete callback');
    });
});

// ////////////////////////Post Requests////////////////////////////// //

app.post('/products/id/product/:productId', async (req, res) => {
  let obj = req.body;
  obj.id = req.params.productId;
  obj.productUrl = '/' + (Number(obj.id) + 1);
  helpers.createProduct(obj)
    .then(() => {
      res.status(204).send(`Success! Item  was created!`)
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
    .then(() => {
      res.status(204).send(`Success! Item  was updated!`)
    })
    .catch((err) => {
      console.error(err);
      res.status(503).send('Error Caught at update callback');
    });
});

module.exports = app;
