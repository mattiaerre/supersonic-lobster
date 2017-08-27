const express = require('express');
const { name, version } = require('../package.json');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  const model = {
    ocRegistryBaseUrl: process.env.OC_REGISTRY_BASE_URL,
    title: `${name} v${version}`,
    components: req['oc-ssr'].components,
    address: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      remoteAddress: req.connection.remoteAddress
    }
  };
  res.render('index', model);
});

module.exports = router;
