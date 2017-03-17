require('dotenv').config();

const debug = require('debug')('supersonic-lobster:index');
const express = require('express');
const path = require('path');
const index = require('./routes/index');
const ocSsrWrapper = require('./middlewares/oc-ssr');

const app = express();
app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(require('express-favicon-short-circuit'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use(ocSsrWrapper({ serverRendering: process.env.OC_REGISTRY_BASE_URL }));

app.use('/', index);

const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});
