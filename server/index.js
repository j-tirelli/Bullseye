const express = require('express');
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('GOT a GET');
});

app.listen(PORT, () => {
  console.log('running on port', PORT);
});
