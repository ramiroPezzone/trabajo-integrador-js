const modeloProductos = require('../models/products');

const controller = {
    raiz: async (req, res) => {
        let listadoProductos = await modeloProductos.find();
        res.render('productos', {
            productos: listadoProductos
        });
    },
    crear: (req, res) => {
        res.render('crear-producto');
    },
    guardar: async (req, res) => {
        await modeloProductos.create(
            {
                name: req.body.nombre,
                brand: req.body.categoria,
                price: req.body.precio,
                desription: req.body.descripcion,
                images: req.file.filename,
            }
        );
        res.redirect('/productos/crear');
    }
}

module.exports = controller;