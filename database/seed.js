const faker = require('faker');
const db = require('./index.js');
const mongoose = require('mongoose');
const fs = require('fs');
const RecommendedItem = require('./RecommendedItem.js');


const generateRecords = function (numRecords) {
  let records = [];
  let brands = [];
  let departments = [];

  for (let i = 0; i < numRecords / 10; i++) {
    brands.push(faker.company.companyName());
    departments.push(faker.commerce.department());
  }

  for (let i = 0; i < numRecords; i++) {
    records.push({
      id: i,
      title: faker.commerce.productName(),
      brand: brands[Math.floor(Math.random() * brands.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
      price: Number(faker.commerce.price(0, 100)) - Math.ceil(Math.random() * 5) / 100,
      imageUrl: `https://twzkraus-fec-images.s3-us-west-1.amazonaws.com/target-images/${i % 50}.jpg`,
      productUrl: `/${i % 100 + 1}`
    });
  }
  console.log(records.length)
  return records;
};

const seedController = (args) => {
  let numOfRecords = args[0] || 700;
  let chunkSize = args[1] || numOfRecords;
  let callback = callBackGenerator(args[2]);
  let chunks = numOfRecords / chunkSize;
  if (chunks === 1) {
    const records = generateRecords(numOfRecords);
    console.log(records.length)

    callback(records);
  }
};

const callBackGenerator = (option = 'fs') => {
  if (option === 'fs') {
    return (records) => {
      fs.writeFile('./data/example_data.js', `module.exports = ${JSON.stringify(records)}`, (err) => {
        if (err) {
          console.log('error:', err);
        } else {
          console.log('example data file has been written');
          debugger;
        }
      });
    }
  } else if (option === 'mongo') {
    return (records) => {
      console.log(records.length)
      RecommendedItem.deleteMany({}, (err) => {
        if (err) {
          console.log('error deleting:', err);
        } else {
          console.log('database has been cleared and will be re-generated');
          RecommendedItem.insertMany(records)
            .then(() => {
              mongoose.disconnect();
            })
            .catch((err) => {
              console.log(err)
            });
        }
      });
    }
  };
};

if (process.argv) {
  console.log(process.argv)
  let args = process.argv.slice(2)
  seedController(args);
}