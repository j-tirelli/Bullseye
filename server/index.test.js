const app = require('./index.js');
const supertest = require('supertest');
const request = supertest(app);
let exampleDepts, exampleBrands, examplePrices;

beforeAll(async (done) => {
  // get metadata for available items
  let allData = await request.get(`/products/price/min=0&max=100`);
  let depts = {};
  let prices = {};
  let brands = {};
  allData.body.forEach(item => {
    depts[item.department] = true;
    prices[item.price] = item.price;
    brands[item.brand] = true;
  });
  exampleDepts = Object.keys(depts);
  exampleBrands = Object.keys(brands);
  examplePrices = Object.values(prices);
  done();
});

test('test suite should be functional', ()=> {
  expect(true).toBe(true);
});

test('should execute basic get request', async done => {
  const response = await request.get('/');

  expect(response.status).toBe(200);
  done();
});

test('should return items from the correct department', async (done) => {

  for (let i = 0; i < exampleDepts.length; i++) {
    let dept = exampleDepts[i];
    let response = await request.get(`/products/dept/${dept}`);
    response.body.forEach(item => {
      expect(item.department).toBe(dept);
    });
  }

  done();
});

test('should return items from the correct brand', async (done) => {

  for (let i = 0; i < exampleBrands.length; i++) {
    let brand = exampleBrands[i];
    let response = await request.get(`/products/dept/${brand}`);
    response.body.forEach(item => {
      expect(item.brand).toBe(brand);
    });
  }

  done();
});

test('should return items in the correct price range', async (done) => {
  const minPrice = Math.min(...examplePrices);
  const maxPrice = Math.max(...examplePrices);
  const priceRange = maxPrice - minPrice;
  let prices = [];
  for (let i = 0; i <= 10; i++) {
    prices.push(minPrice + i / 10 * (priceRange));
  }

  for (let i = 0; i < prices.length; i++) {
    let lowPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let highPrice = prices[j];
      const response = await request.get(`/products/price/min=${prices[i]}&max=${prices[j]}`);

      if (response.body.length) {
        response.body.forEach(item => {
          expect(item.price).not.toBeLessThan(lowPrice);
          expect(item.price).not.toBeGreaterThan(highPrice);
        });
      }
    }
  }
  done();
});

test('should return an empty array if there are no results for a department', async (done) => {
  const response = await request.get('/products/dept/turneriscool');
  expect(response.body.length).toBe(0);
  done();
});

test('should return an empty array if there are no results for a brand', async (done) => {
  const response = await request.get('/products/brand/turneriscool');
  expect(response.body.length).toBe(0);
  done();
});

test('should return an empty array if there are no results in a price range', async (done) => {
  const invalidPrice = Math.max(...examplePrices) + 1;
  const response = await request.get(`/products/price/min=${invalidPrice}&max=${invalidPrice}`);
  expect(response.body.length).toBe(0);
  done();
});

test('should not return data for an invalid brand name', async (done) => {
  const madeUpBrand = exampleBrands[0] + ' & Company';
  const response = await request.get(`/products/brand/${madeUpBrand}`);
  console.log(response.body);
  if (response.body.length) {
    expect(response.body[0].brand).toBe(madeUpBrand);
  } else {
    expect(response.body.length).toBe(0);
  }
  done();
})
