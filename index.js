const express = require('express');
const path = require('path');
const falcorExpress = require('falcor-express');
const Router = require('falcor-router');
const debug = require('debug')('supersonic-lobster:index');

const app = express();

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => { // eslint-disable-line no-unused-vars, arrow-body-style
  return new Router([
    {
      route: 'greeting',
      get: () => ({ path: ['greeting'], value: 'Hello from Falcor' })
    }
  ]);
}));

app.use(express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;

const server = app.listen(port); // eslint-disable-line no-unused-vars

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});
