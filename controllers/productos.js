const modeloProductos = require('../models/products'),
    fs = require('fs');

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
                description: req.body.descripcion,
                images: req.file.filename,
            }
        );
        res.redirect('/productos/crear');
    },
    detalles: async (req, res) => {
        const productoID = req.params.id,
            productoDeDB = await modeloProductos.findById(productoID)
        res.render('detalles', {
            productoIndividual: productoDeDB
        });

    },
    editar: async (req, res) => {
        const nombreProducto = document.getAttibute.name
        console.log(nombreProducto); 
        await modeloProductos.findOneAndUpdate(
            {
                name: req.params.name,
                brand: req.params.brand,
                price: req.params.price,
                description: req.params.description,
                images: req.params.images,
            }
        );
        res.redirect('/productos');
    },
    borrar: async (req, res) => {
        const productoBorrado = await modeloProductos.findOneAndDelete();

        try {
            fs.unlinkSync('public/images/' + productoBorrado.images, function (err) {
                if (err) {
                    console.log(err);
                }
            })
        } catch (err) {
            if (err) {
                console.log('No fue posible eliminar la imagen' + err);
            }
        }

        res.redirect('/productos');
    }
}

module.exports = controller;