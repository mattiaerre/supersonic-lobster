const greeting = require('./greeting');
const apod = require('./apod');

const falcorRoutes = () => { // eslint-disable-line arrow-body-style
  return []
    .concat(greeting())
    .concat(apod(process.env.NASA_API_KEY));
};

module.exports = falcorRoutes;
