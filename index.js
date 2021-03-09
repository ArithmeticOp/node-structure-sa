const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const db = require('./src/db.module')
// db.connect(function (err) {
//     if (err) {
//         console.log('Error connecting to Db')
//         return
//     }

console.log('Connection established')

const things = require('./src/things/things.controller')
const roles = require('./src/roles/roles.controller')

const auth = require('./src/auth.module')

app.use(function (req, res, next) {
    let shared_token = req.query?.shared_token || req.body?.shared_token;
    if (auth.verify(shared_token)?.exp > Math.floor(Date.now() / 1000)) next()
    else res.send('Unauthorized, Invalid Token.')
})

app.use(function (req, res, next) {
    req.con = db
    next()
})

app.use('/things', things)
app.use('/roles', roles)

app.listen(3000)
// })