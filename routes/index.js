const express = require('express')
const fibonacciController = require('../controller/fibonacci')
const greetings = require('../pages/home')
const fibonacci = require('../pages/fibonacci')

const router = express.Router()
router.get('/', greetings)
router.post('/fibonacci', fibonacciController.createSequence)
router.get('/getfibonacci', fibonacci)

module.exports = router
