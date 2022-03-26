const express = require('express')
const router = express.Router()

const router_handler = require('./router_handler')

router.get('/Movies',router_handler.getAllMovies)
router.get('/Moviegen',router_handler.getMoviesNameAndGenre)
router.get('/MovieActor',router_handler.getMoviesNameAndActor)
router.get('/MovieGroup',router_handler.getGroup)
router.get('/MovieView',router_handler.getView)


module.exports = router