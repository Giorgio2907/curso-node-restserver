const { response, request } = require('express');

// 1. GET - Obteniendo parámetros Query (?q=hola&nombre=fernando)
const usuariosGet = (req = request, res = response) => {
    // Extraemos los parámetros opcionales de la URL. Si no vienen, podemos poner valores por defecto
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

// 2. PUT - Obteniendo parámetros de segmento (/api/usuarios/10)
const usuariosPut = (req, res = response) => {
    // Extraemos el id que configuramos en la ruta (req.params)
    const id = req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

// 3. POST - Obteniendo el Body (Información del formulario o JSON)
const usuariosPost = (req, res = response) => {
    // Extraemos las propiedades que nos interesan del cuerpo de la petición
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

// Exportamos todas las funciones para que puedan ser usadas en otros archivos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}