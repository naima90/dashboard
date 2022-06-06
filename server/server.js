const express = require('express');
const axios = require('axios');
const cors = require("cors");

const port = 5000;

const app = express();


// handles cross-origin requests
app.use(cors({
  origin: "*",
}));

// getting data from LDT api & returning it.
app.get("/api/startlistentries", async (req, res) => {
  await axios.get('https://ldt-tech-test.herokuapp.com/api/startlistentries')
  .then((response) => {
    console.log(response.data[0]);
    res.send(response.data)
  })
  .catch((err) =>{
    console.log(err);
  });
});



// logs what port server is running on
app.listen(port,() => {
    console.log(`From port ${port}`);
});