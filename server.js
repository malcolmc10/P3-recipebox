const express = require("express");
const cors = require("cors"); 
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require('./routes/recipes')
const data = require("./db/connection")
const PORT = process.env.PORT || 3000;
const app = express();


app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/api', router)
data.on("error", console.error.bind(console , "MongoDB connection error"))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))