const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const app = express();

const dbRoutes = require('./app/controllers/dbRoutes');

const seedScript = require('./app/helpers/seedingScript');

const port = 3000;

seedScript();

app.use(compression());
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));

app.get('/api/bundle', (req, res) => {
  res.sendFile(`${__dirname}/dist/bundle.js`);
});

app.use('/api', cors(), dbRoutes); // App must handle any table name for /api routes

app.get('/products/:id', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('*', (req, res) => {
  res.redirect('/products/1');
});

app.listen(port);
console.log(`Listening on localhost:${port}`);
