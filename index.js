const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));

const server = app.listen(3000); // eslint-disable-line no-unused-vars
