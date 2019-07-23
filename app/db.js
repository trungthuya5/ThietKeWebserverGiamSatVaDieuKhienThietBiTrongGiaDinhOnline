const {Client } = require('pg')
const db = new Client({connectionString: 'postgresql://postgres:123456@localhost:5433/doantotnghiep'})

// const pool = new Pool({
//     user: 'me',
//     host: 'localhost',
//     database: 'api',
//     password: 'password',
//     port: 5432,
//   })
db.connect()
module.exports = db