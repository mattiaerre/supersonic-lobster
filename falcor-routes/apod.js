// todo: this is not good
let fetch = global.fetch;
if (!fetch) {
  fetch = require('node-fetch'); // eslint-disable-line global-require
}

const debug = require('debug')('supersonic-lobster:falcor-routes/apod');

const APOD = 'apod';
const DATE = 'date';
const EXPLANATION = 'explanation';
const MEDIA_TYPE = 'media_type';
const URL = 'url';

const routes = apiKey => (
  [
    {
      route: `${APOD}["${DATE}", "${EXPLANATION}", "${MEDIA_TYPE}", "${URL}"]`, // todo: test this property
      async get(pathSet) {
        const keys = pathSet[1]; // e.g.: ['explanation', 'url']
        const results = [];
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
          .then((response) => { // eslint-disable-line arrow-body-style
            return response.json();
          })
          .then((json) => {
            if (keys.includes(DATE)) {
              results.push({
                path: [APOD, DATE],
                value: json[DATE]
              });
            }

            if (keys.includes(EXPLANATION)) {
              results.push({
                path: [APOD, EXPLANATION],
                value: json[EXPLANATION]
              });
            }

            if (keys.includes(MEDIA_TYPE)) {
              results.push({
                path: [APOD, MEDIA_TYPE],
                value: json[MEDIA_TYPE]
              });
            }

            if (keys.includes(URL)) {
              results.push({
                path: [APOD, URL],
                value: json[URL].replace('http:', '')
              });
            }
          })
          .catch((ex) => {
            debug('parsing failed', ex);
          });
        return results;
      }
    }
  ]
);

module.exports = routes;
