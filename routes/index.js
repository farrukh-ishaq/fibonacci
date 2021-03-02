const express = require('express')
const fibonacciController = require('../controller/fibonacci')

const router = express.Router()
router.post('/fibonacci', fibonacciController.createSequence)

module.exports = router
