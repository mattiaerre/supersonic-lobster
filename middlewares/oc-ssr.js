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
            logoUrl: '/images/FFFFFF-0.png'
          }
        },
        {
          name: 'oc-timeago',
          parameters: { start: '2017-02-07' }
        },
        {
          name: 'oc-apod',
          parameters: { apiKey: process.env.NASA_API_KEY }
        },
        {
          name: 'oc-my-next-run',
          parameters: { id: process.env.OC_MY_NEXT_RUN_ID }
        },
        {
          name: 'oc-social-media-buttons'
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
            'oc-timeago': htmls[2],
            'oc-apod': htmls[3],
            'oc-my-next-run': htmls[4],
            'oc-social-media-buttons': htmls[5]
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
