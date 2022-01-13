let express = require('express'),
    routes = express.Router(),
    controller = require('../controllers/productos');
    
// Rutas de productos

routes.get('/', controller.raiz)




module.exports = routes;