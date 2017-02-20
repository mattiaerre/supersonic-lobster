// info: maybe move this into './index'?
let fetch = global.fetch;
if (!fetch) {
  fetch = require('node-fetch'); // eslint-disable-line global-require
}

const APOD = 'apod';
const EXPLANATION = 'explanation';
const URL = 'url';

const routes = apiKey => (
  [
    {
      route: `${APOD}["${EXPLANATION}", "${URL}"]`,
      async get(pathSet) {
        const keys = pathSet[1]; // e.g.: ['explanation', 'url']
        const results = [];
        await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
          .then(response => (response.json()))
          .then((json) => {
            if (keys.includes(EXPLANATION)) {
              results.push({
                path: [APOD, EXPLANATION],
                value: json.explanation
              });
            }

            if (keys.includes(URL)) {
              results.push({
                path: [APOD, URL],
                value: json.url.replace('http:', '')
              });
            }
          })
          .catch((ex) => {
            console.log('parsing failed', ex); // eslint-disable-line no-console
          });
        return results;
      }
    }
  ]
);

module.exports = routes;
