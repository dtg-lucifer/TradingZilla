import mysql from "mysql";

const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password@sql@2022",
    database: "trading_zilla",
});

export default sql;