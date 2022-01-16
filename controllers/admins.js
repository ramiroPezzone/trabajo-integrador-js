const modeloProductos = require('../models/products'),
    fs = require('fs'),
    controllerAdmins = {
        raiz: async (req, res) => {
            const listadoProductos = await modeloProductos.find()
            res.render('admins', {
                productos: listadoProductos
            })
        },
        crear: (req, res) => {
            res.render('crear-producto');
        },
        guardar: async (req, res) => {
            await modeloProductos.create(
                {
                    idProducto: req.body.idProducto,
                    name: req.body.name,
                    brand: req.body.brand,
                    price: req.body.price,
                    description: req.body.description,
                    images: req.file.filename,
                }
            );
            res.redirect('/admins');
        },
        editar: async (req, res) => {
                const productoAEditar = await modeloProductos.findById(req.params.id)
            res.render('editar', {
                producto: productoAEditar,
            });
        },
        guardarCambios: async (req, res) => {
            const datosAEditar = await modeloProductos.findByIdAndUpdate(req.params.id, {
                idProducto: req.body.idProducto,
                name: req.body.name,
                brand: req.body.brand,
                price: req.body.price,
                description: req.body.description,
                images: req.file.filename
            })
            fs.unlink('public/images/' + datosAEditar.images, () => {
            })
            res.redirect('/admins');
        },
        borrar: async (req, res) => {
            const idProducto = req.params.id,
                productoBorrado = await modeloProductos.findByIdAndDelete(idProducto);

            fs.unlink('public/images/' + productoBorrado.images, () => {
            })

            res.redirect('/admins');
        },
    }

module.exports = controllerAdmins