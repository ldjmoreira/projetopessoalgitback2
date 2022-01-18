//const app = require('express')()//instancia do node.js

const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()// app é passado para todas as instancias do then do consign
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./api/validation.js')
.then('./api/date_utils.js')
.then('./api')
.then('./schedule')
.then('./config/routes.js')
.into(app)

//console.log("Database_URL", process.env.DATABASE_URL);

app.listen(process.env.PORT || 4006 )

