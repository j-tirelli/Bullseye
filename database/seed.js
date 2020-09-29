const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');
const RecommendedItem = require('./RecommendedItem.js');

const generateRecords = function(numRecords) {
  let records = [];
  let brands = [];
  let departments = [];

  for (let i = 0; i < numRecords / 10; i++) {
    brands.push(faker.company.companyName());
    departments.push(faker.commerce.department());
  }

  for (let i = 0; i < numRecords; i++) {
    records.push({
      title: faker.commerce.productName(),
      brand: brands[ Math.floor( Math.random() * brands.length ) ],
      department: departments[ Math.floor( Math.random() * departments.length ) ],
      price: faker.commerce.price(0, 100),
      imageUrl: `https://twzkraus-fec-images.s3-us-west-1.amazonaws.com/target-images/${i % 51}.jpg`,
      productUrl: `http://fakewebsite.com/products/${i}`
    });
  }
  return records;
};

RecommendedItem.deleteMany({}, (err) => {
  if (err) {
    console.log('error deleting:', err);
  } else {
    const records = generateRecords(600);
    RecommendedItem.create(records)
      .then(() => {
        mongoose.disconnect();
      });
  }
})


