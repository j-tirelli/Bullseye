const faker = require('faker');
const fs = require('fs');


const generateRecords = function (numRecords) {
  let brands = [];
  let departments = [];
  for (let i = 0; i < numRecords / 10; i++) {
    brands.push(faker.company.companyName());
    departments.push(faker.commerce.department());
  }

  let writeStream = fs.createWriteStream('/home/john/example_data.csv');

  writeStream.write(`title|brand|department|price|imageUrl|productUrl\n`);

  const write = (offset = 1) => {
    let ready = true;
    while (offset <= numRecords && ready) {
      ready = writeStream.write(`${faker.commerce.productName()}|${brands[Math.floor(Math.random() * brands.length)]}|${departments[Math.floor(Math.random() * departments.length)]}|${Number(faker.commerce.price(0, 100)) - Math.ceil(Math.random() * 5) / 100}|https://loremflickr.com/320/240/product|/${offset % (numRecords + 1)}\n`);
      offset++;
    }
    if (offset <= numRecords) {
      writeStream.once('drain', () => {
        write(offset)
      })
    } else {
      writeStream.end();
      console.log('stream ended');
    }
  }

  write();

};

if (process.argv) {
  let args = process.argv.slice(2)
  let numOfRecords = args[0] || 10000000;
  generateRecords(numOfRecords)
}