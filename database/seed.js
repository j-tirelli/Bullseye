const faker = require('faker');
const numRecords = 60;
let records = [];

for (let i = 0; i < numRecords; i++) {
  records.push({
    _id: i,
    title: faker.commerce.productName(),
    price: faker.commerce.price(0, 100),
    imageUrl: 'nothing to see here right now',
    productUrl: `http://fakewebsite.com/products/${i}`
  });
}




