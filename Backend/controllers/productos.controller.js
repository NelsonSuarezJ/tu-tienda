const Productos = require('../models/productos.models');
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let producto = new Productos({
        nombre_tienda: req.body.nombre_tienda,
        telefono_tienda: req.body.telefono_tienda,
        direccion_tienda: req.body.direccion_tienda,
        email_tienda: req.body.email_tienda,       
        ciudad: req.body.ciudad,
        tipo_producto: req.body.tipo_producto,
        nombre_producto: req.body.nombre_producto,
        precio_kg: req.body.precio_kg,
        url_img: req.body.url_img

    })

    producto.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = " Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = " El producto se ha guardado con éxito"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Productos.find(function (err, productos) {
        res.json(productos)
    })
}

exports.findOne = function (req, res) {
    Productos.findOne({ _id: req.params.id }, function (err, productos) {
        res.json(productos)
    })
}

exports.update = function (req, res) {
    let producto = {
        nombre_tienda: req.body.nombre_tienda,
        telefono_tienda: req.body.telefono_tienda,        
        direccion_tienda: req.body.direccion_tienda,
        email_tienda: req.body.email_tienda,
        ciudad: req.body.ciudad,
        tipo_producto: req.body.tipo_producto,
        nombre_producto: req.body.nombre_producto,
        precio_kg: req.body.precio_kg,
        url_img: req.body.url_img
    }

    Productos.findByIdAndUpdate(req.params.id, {$set: producto }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = " El producto se modificón correctamente"
        res.json(response)
    })
}

exports.remove = function (req, res){
    Productos.findByIdAndRemove({_id: req.params.id},
        function(err){
            if (err){
                console.error = false,
                    response.exito = false,
                    response.msg = "Error al eliminar el "
                res.json(response)
                return;
            }
            
            response.exito = true,
                response.msg = "El  se ha eliminado con éxito"
            res.json(response)
    
        })
        
    }




