const modeloProductos = require('../models/products'),
    fs = require('fs');

const controller = {
    raiz: async (req, res) => {
        let listadoProductos = await modeloProductos.find();
        res.render('productos', {
            productos: listadoProductos
        });
    },
    detalles: async (req, res) => {
        const productoID = req.params.id,
            productoDeDB = await modeloProductos.findById(productoID)
        res.render('detalles', {
            productoIndividual: productoDeDB
        });

    },

}
    
module.exports = controller;