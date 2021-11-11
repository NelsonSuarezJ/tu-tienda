const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre_tienda: { type: String, required: [true, 'Nombre Tienda obligatorio'], max:60 },
    telefono_tienda: { type: String, required: [true, 'Telefono Tienda obligatorio'], max:10 },
    direccion_tienda: { type: String, required: [true, 'dirección Tienda obligatorio'], max: 200 },
    email_tienda: { type: String, required: [true, 'Email Tienda obligatorio'], max: 70 },
    ciudad: { type: String, required: [true, 'ciudad Tienda obligatorio'], max: 20 },
    tipo_producto: { type: String, required: [true, 'Tipo de producto obligatorio'], max: 40 },
    nombre_producto: { type: String, required: [true, 'Nombre Producto obligatorio'], max: 40 },
    precio_kg: { type: String, required: [true, 'Precio Producto obligatorio'], max: 10 },
    url_img:  {type: String, max: 200}
});

//Convertir a Modelo

module.exports = mongoose.model('Productos',ProductosSchema);

