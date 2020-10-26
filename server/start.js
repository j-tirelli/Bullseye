require('newrelic');
const app = require('./index.js');
const PORT = 3003;

app.listen(PORT, () => {
  console.log('running on port', PORT);
});
