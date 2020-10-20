const { Pool } = require('pg')

const host = process.env.PGHOST;
const user = process.env.PGUSER;
const database = process.env.PGDATABASE;
const password = process.env.PGPASSWORD;
const port = process.env.PGPORT;
let connectionDeets = { user, host, database, password, port };

const pool = new Pool(connectionDeets);

module.exports = {
  query: (text, params) => pool.query(text, params),
}