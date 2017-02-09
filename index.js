const express = require('express');
const path = require('path');
const falcorExpress = require('falcor-express');
const Router = require('falcor-router');
const debug = require('debug')('supersonic-lobster:index');
const falcorPostman = require('falcor-postman');
const index = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const options = { middlewarePath: '/falcor-postman', falcorModelPath: '/model.json', app };
app.use(falcorPostman(options));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', index);

app.use(require('express-favicon-short-circuit'));

const apodSample = require('./falcor-routes/apod-sample');

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => { // eslint-disable-line no-unused-vars, arrow-body-style
  const GREETING = 'greeting';
  const APOD = 'apod';
  return new Router([
    {
      route: GREETING,
      get: () => ({ path: [GREETING], value: 'Hello from Falcor' })
      // get: () => { throw new Error('NO GREETING BRO!'); }
    },
    {
      route: APOD,
      get: () => {
        const results = [];

        results.push({
          path: [APOD, 'explanation'],
          value: apodSample.explanation
        });

        results.push({
          path: [APOD, 'url'],
          value: apodSample.url
        });

        return results;
      }
    }
  ]);
}));

const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () => {
  debug(`http://127.0.0.1:${port}`);
});
