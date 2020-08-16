const knex = require('knex');
const env = process.env.DB_ENV || 'production'

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);