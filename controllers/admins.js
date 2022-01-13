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
                    name: req.body.nombre,
                    brand: req.body.categoria,
                    price: req.body.precio,
                    description: req.body.descripcion,
                    images: req.file.filename,
                }
            );
            res.redirect('/admins');
        },
        detalles: async (req, res) => {
            const productoID = req.params.id,
                productoDeDB = await modeloProductos.findById(productoID)
            res.render('detalles', {
                productoIndividual: productoDeDB
            });
        },
        editar: async (req, res) => {
            const productoID = req.params.id,
                productoAEditar = await modeloProductos.findById(productoID)
            res.render('editar', {
                producto: productoAEditar
            });
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

            res.redirect('/admins');
        }
    }

module.exports = controllerAdmins