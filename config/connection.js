const { Client } = require("pg")

const client = new Client()
client.connect()
.then(() => console.log("DB Connected"))
.catch((err) => console.error(err))

module.exports = client;