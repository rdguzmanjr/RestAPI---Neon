require('dotenv').config();
const {Client} = require('pg')

const client=new Client({
    host: process.env.NEON_HOST,
    user:process.env.NEON_USER,
    port:process.env.NEON_PORT,
    password:process.env.NEON_PASSWORD,
    database:process.env.NEON_DATABASE,
    ssl: true //only for external
})

module.exports=client