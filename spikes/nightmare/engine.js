const debug = require('debug')('supersonic-lobster:spikes/nightmare');
const nightmare = require('nightmare');
const version = require('../../package.json').version;

const PORT = 3000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

// info: make sure to run `yarn nodemon` first
// https://github.com/electron/electron/blob/master/docs/api/web-contents.md#contentssavepagefullpath-savetype-callback

nightmare({ show: true })
  .goto(BASE_URL)
  .wait('body')
  .html(`./tmp/${version}/index.html`, 'HTMLComplete')
  .end()
  .then(
  () => debug(`${BASE_URL}/${version}`),
  error => debug('error:', error)
  );
