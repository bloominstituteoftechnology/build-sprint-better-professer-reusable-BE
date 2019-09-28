const knex = require('knex');
const secret = require('../config/secrets');

const knexFile = require('../knexfile');

const knexConfig = knexFile[secret.environment];
// getting environment from dbCongif file and importing it up top here
// you dont need || development cause youre defining it in .env file

module.exports = knex(knexConfig);
