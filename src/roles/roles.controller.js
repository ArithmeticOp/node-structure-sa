const express = require('express')
const router = express.Router()

// roles -> list roles
// roles

// roles -> get role
// roles/:id

// roles -> request roles
// roles/request

// roles -> invite roles
// roles/invite

// roles -> remove roles
// roles/remove

router.get('/', function (req, res) {
    res.send('Roles')
})

router.get('/:id', function (req, res) {
    res.send('Roles')
})

router.post('/request', function (req, res) {
    res.send('Roles')
})

router.post('/invite', function (req, res) {
    res.send('Roles')
})

router.post('/remove', function (req, res) {
    res.send('Roles')
})

module.exports = router