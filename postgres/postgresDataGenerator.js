const faker = require('faker');
const fs = require('fs');


const generateRecords = function (numRecords) {
  const brands = [];
  const departments = [];
  for (let i = 0; i < 20; i++) {
    departments.push(faker.commerce.department());
  }
  for (let i = 0; i < 200; i++) {
    brands.push(faker.company.companyName());
  }

  const imageSources = [
    'http://placeimg.com/640/480/',
    'https://loremflickr.com/320/240/'
  ]

  let writeStream = fs.createWriteStream('postgres/example_data.csv');

  writeStream.write(`title|brand|department|price|imageUrl|productUrl\n`);

  const write = (offset = 1) => {
    let ready = true;
    while (offset <= numRecords && ready) {
      let productName = faker.commerce.productName()
      let productType = productName.split(' ')[2];
      let imageUrl = imageSources[Math.floor(Math.random() * imageSources.length)] + productType + `?random=${offset}`;
      let brand = brands[Math.floor(Math.random() * brands.length)];
      let department = departments[Math.floor(Math.random() * departments.length)];
      let price = Number(faker.commerce.price(0, 100)) - Math.ceil(Math.random() * 5) / 100;
      let productUrl = offset % (numRecords + 1);
      ready = writeStream.write(`${productName}|${brand}|${department}|${price}|${imageUrl}|/${productUrl}\n`);
      offset++;
    }
    if (offset <= numRecords) {
      writeStream.once('drain', () => {
        write(offset);
      });
    } else {
      writeStream.end();
      console.log('stream ended');
    }
  }

  write();

};

if (process.argv) {
  let args = process.argv.slice(2);
  let numOfRecords = args[0] || 10000000;
  generateRecords(numOfRecords);
}