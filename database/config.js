const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'rizqi_backend_2',
    port: 5432,
    password: 'admin'
})

module.exports = databaseConfig