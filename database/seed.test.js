const RecommendedItem = require('./RecommendedItem.js');

RecommendedItem.find((err, vals) => {
  test('has data in db', ()=> {
    expect(vals.length).toBeGreaterThan(0);
  });
});
