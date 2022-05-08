const { Client } = require("pg");

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgresql",
    database: "tradingzilla",
});

client.connect().then(() => console.log("Connected to PostGresQL Successfully"));

export default client;