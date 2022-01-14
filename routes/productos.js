let express = require('express'),
    routes = express.Router(),
    controller = require('../controllers/productos');
    
// Rutas de productos

routes.get('/', controller.raiz)

routes.get('/detalles/:id', controller.detalles)






module.exports = routes;