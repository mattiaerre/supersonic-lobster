const greeting = require('./greeting');
const apod = require('apod-graphistry-falcor-routes');

const falcorRoutes = () => { // eslint-disable-line arrow-body-style
  return []
    .concat(greeting(process.env.GREETING))
    .concat(apod(process.env.NASA_API_KEY));
};

module.exports = falcorRoutes;
