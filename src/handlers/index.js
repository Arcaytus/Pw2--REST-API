const express = require('express');
const usersRouting = require('./users');

const apiRouting = express.Router();

apiRouting.use('/', usersRouting);

module.exports = apiRouting;

const app = express();


