const mysql = require("mysql");

db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jogos_db"
})

module.exports = { db };