require('dotenv').config();

const express = require('express');
const path = require('path');
const falcorExpress = require('falcor-express');
const Router = require('@graphistry/falcor-router');
const debug = require('debug')('supersonic-lobster:index');
const falcorPostman = require('falcor-postman');
const index = require('./routes/index');
const falcorRoutes = require('./falcor-routes');
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

const options = { middlewarePath: '/falcor-postman', falcorModelPath: '/api/v1/model.json', app };
app.use(falcorPostman(options));

app.use('/api/v1/model.json', falcorExpress.dataSourceRoute((req, res) => { // eslint-disable-line no-unused-vars, arrow-body-style
  return new Router(falcorRoutes());
}));

const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});
