const { Pool } = require('pg');
const config = require('../app/config');

const pool = new Pool({
  user: 'postgres',
  host: 'db.limejhkvrfiycjnntivo.supabase.co',
  database: 'postgres',
  password: 'govinda@1',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;