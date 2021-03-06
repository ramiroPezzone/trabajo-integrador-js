let mongoose = require('mongoose');

let schemaProductos = new mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        images: { type: String, required: true },
        idProducto: {type: String, require: true},
    }
);

let modeloProductos = mongoose.model('Product', schemaProductos);

module.exports = modeloProductos;