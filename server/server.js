const express = require('express');
const port = 5000;

// initialize app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// logs what port server is running on
app.listen(port,() => {
  console.log(`From port ${port}`);
});