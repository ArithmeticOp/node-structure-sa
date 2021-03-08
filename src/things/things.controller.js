const express = require('express')
const router = express.Router()

// users -> list things
// things

// users -> get thing 
// things/:id

// users -> claim things
// things/claim

// users -> update things
// things/update

// users -> unclaim things
// things/unclaim

router.get('/', function (req, res) {
    let db = req.con
    res.send('Things')
})

router.get('/:id', function (req, res) {
    console.log(req.params)
    res.send('Things')
})

router.post('/claim', function (req, res) {
    let db = req.con
    res.send('Things')
})

router.post('/update', function (req, res) {
    let db = req.con
    res.send('Things')
})

router.post('/unclaim', function (req, res) {
    let db = req.con
    res.send('Things')
})

module.exports = router