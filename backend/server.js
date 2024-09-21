const express = require("express");
const cors = require("cors");
const makeid = require("./randomString.js");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({
  origin: '*',
  credentials: true
}));

// Store shortened URLs
const urlDatabase = {};

app.post('/api/shorten', (req, res) => {
  const { uri } = req.body;
  console.log(`Received URL: ${uri}`);

  const randomString = makeid();
  const newUrl = 'https://ching.ly/'.concat(randomString);
  console.log(`Generated Random String: ${newUrl}`);

  // Store the mapping
  urlDatabase[randomString] = uri;

  res.json({ newUrl }); 
});

app.get('/api/:shortCode', (req, res) => {
  const { shortCode } = req.params;
  const originalUrl = urlDatabase[shortCode];

  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});