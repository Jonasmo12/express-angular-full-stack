const { Pool } = require("pg");



const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 9092
})


createUserTable()
// create tables here
function createUserTable()  {
    pool.query("CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, firstName VARCHAR(100), lastName VARCHAR(100), email VARCHAR(100))")
    console.log("Table created");
}



module.exports = pool
