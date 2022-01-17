const express = require('express'),
routes = express.Router(),
controller = require('../controllers/logueo')

routes.post('/login', controller.login)

module.exports = routes