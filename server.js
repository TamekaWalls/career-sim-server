const express=require('express')
require('dotenv').config()
const routes = require('./routes')

const app = express()

app.use("/api", routes)

const PORT = 3000; 
app.listen(PORT, ()=> console.log("Server Running on Port 3000"))