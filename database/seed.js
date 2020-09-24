const faker = require('faker');
const numRecords = 60;
let records = [];

for (let i = 0; i < numRecords; i++) {
  records.push({
    _id: i,
    title: faker.commerce.productName(),
    price: faker.commerce.price(0, 100),
    imageUrl: `https://twzkraus-fec-images.s3-us-west-1.amazonaws.com/50+images/${(i + 15) % 50}.jpg`,
    productUrl: `http://fakewebsite.com/products/${i}`
  });
}

module.exports = records;


