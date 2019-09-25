const knex = require('knex');

const knexFile = require('../knexfile');

const knexConfig = knexFile[process.env.NODE_ENV] || 'development';

module.exports = knex(knexConfig);
