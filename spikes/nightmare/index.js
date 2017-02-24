require('babel-core/register');
require('babel-polyfill');
require('dotenv').config();

const express = require('express');
const path = require('path');
const falcorExpress = require('falcor-express');
const Router = require('falcor-router');
const debug = require('debug')('supersonic-lobster:index');
const falcorRoutes = require('../../falcor-routes');
const version = require('../../package.json').version;

const app = express();

app.use(require('express-favicon-short-circuit'));

app.use(express.static(path.join(__dirname, `../../tmp/${version}`)));

app.use('/api/v1/model.json', falcorExpress.dataSourceRoute(() => new Router(falcorRoutes())));

const port = process.env.PORT || 4000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});
