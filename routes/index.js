const express = require('express');
const { name, version } = require('../package.json');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/', (req, res) => {
  res.render('index', { title: `${name} v${version}` });
});

module.exports = router;
