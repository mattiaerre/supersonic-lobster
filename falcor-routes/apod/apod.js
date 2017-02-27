// todo: this is not good
let fetch = global.fetch;
if (!fetch) {
  fetch = require('node-fetch'); // eslint-disable-line global-require
}

const debug = require('debug')('supersonic-lobster:falcor-routes/apod');

const { APOD, COPYRIGHT, DATE, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL } = require('./fields');

const removeProtocol = (url) => {
  if (url) {
    return url.replace('http:', '').replace('https:', '');
  }
  return '';
};

const routes = apiKey => (
  [
    {
      route: `${APOD}["${DATE}", "${COPYRIGHT}", "${EXPLANATION}", "${HDURL}", "${MEDIA_TYPE}", "${TITLE}", "${URL}"]`,
      async get(pathSet) {
        const keys = pathSet[1]; // e.g.: ['explanation', 'url']
        const results = [];
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
          .then((response) => { // eslint-disable-line arrow-body-style
            return response.json();
          })
          .then((json) => {
            if (keys.includes(COPYRIGHT)) {
              results.push({
                path: [APOD, COPYRIGHT],
                value: json[COPYRIGHT] || ''
              });
            }

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

            if (keys.includes(HDURL)) {
              results.push({
                path: [APOD, HDURL],
                value: removeProtocol(json[HDURL])
              });
            }

            if (keys.includes(MEDIA_TYPE)) {
              results.push({
                path: [APOD, MEDIA_TYPE],
                value: json[MEDIA_TYPE]
              });
            }

            if (keys.includes(TITLE)) {
              results.push({
                path: [APOD, TITLE],
                value: json[TITLE]
              });
            }

            if (keys.includes(URL)) {
              results.push({
                path: [APOD, URL],
                value: removeProtocol(json[URL])
              });
            }
          })
          .catch((error) => {
            debug('error:', error);
          });
        return results;
      }
    }
  ]
);

module.exports = routes;
