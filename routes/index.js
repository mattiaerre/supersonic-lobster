const express = require('express');
const { name, version } = require('../package.json');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  const model = {
    ocRegistryBaseUrl: process.env.OC_REGISTRY_BASE_URL,
    title: `${name} v${version}`
  };
  res.render('index', model);
});

module.exports = router;
