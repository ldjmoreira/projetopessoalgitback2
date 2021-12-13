//const app = require('express')()//instancia do node.js

const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()// app é passado para todas as instancias do then do consign
.include('./config/middlewares.js')
.then('./api/validation.js')
.then('./api/date_utils.js')
.then('./api')

.then('./config/routes.js')
.into(app)



app.listen(process.env.PORT || 4006 )

