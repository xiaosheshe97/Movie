const express = require('express')
const router = express.Router()

const router_handler = require('./router_handler')

router.get('/Movies',router_handler.getAllMovies)


module.exports = router