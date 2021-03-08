const mysql = require("mysql")
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "smart_access"
})

module.exports = db