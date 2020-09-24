const records = require('./seed.js');

test('has a length of 60 items', ()=> {
  expect(records.length).toBe(60);
});
