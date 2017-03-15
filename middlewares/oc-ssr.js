const debug = require('debug')('supersonic-lobster:middlewares/oc-ssr');
const Client = require('oc-client');
const { name, version } = require('../package.json');

const OC_SSR = 'oc-ssr';

const ocSsrWrapper = (config) => {
  const ocSsr = (req, res, next) => {
    if (!req[OC_SSR]) {
      const client = new Client({ registries: { serverRendering: config.serverRendering } });

      const components = [
        { name: 'oc-client' },
        {
          name: 'oc-columbus-header',
          parameters: {
            title: `${name} v${version}`,
            logoUrl: '/images/supersonic-lobster-logo.png'
          }
        },
        {
          name: 'oc-timeago',
          parameters: { start: '2017-02-07' }
        }
      ];

      client.renderComponents(
        components,
        {
          container: false,
          headers: {
            'Accept-Language': 'en-US'
          },
          timeout: 3.0
        }, (errors, htmls) => {
          if (errors) {
            debug('errors:', errors);
          }
          debug('htmls:', htmls);
          const model = {
            'oc-client': htmls[0],
            'oc-columbus-header': htmls[1],
            'oc-timeago': htmls[2]
          };
          req[OC_SSR] = { components: model }; // eslint-disable-line no-param-reassign
          next();
        });
    } else {
      next();
    }
  };
  return ocSsr;
};

module.exports = ocSsrWrapper;
