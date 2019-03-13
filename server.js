require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();

const dbRoutes = require('./app/controllers/dbRoutes');
const port = 3000;

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));

app.get('/api/bundle', (req, res) => {
  res.sendFile(`${__dirname}/dist/bundle.js`);
});

app.use('/api/products', cors(), dbRoutes); // App must handle any table name for /api routes

app.get('/:id', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(port);
console.log(`Listening on localhost:${port}`);
