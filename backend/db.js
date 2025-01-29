const { Pool } = require('pg');

const config = require('../app/config');
const pool = new Pool(config.DB_CONFIG);

module.exports = pool;