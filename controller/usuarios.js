const { response, request } = require('express');
const bcryptjs = require('bcryptjs'); 
const Usuario = require('../models/usuario');

const usuariosGet = async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        usuarios
    });
}

// 2. PUT - Obteniendo parámetros de segmento (/api/usuarios/10)
const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    // Sacamos lo que NO se debe actualizar directamente; el resto va en "resto"
    const { _id, password, google, correo, ...resto } = req.body;

    // Si mandan password nuevo, hay que encriptarlo antes de guardar
    if (password) {
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });

    res.json(usuario);
}

// 3. POST - Obteniendo el Body (Información del formulario o JSON)
const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.json({ usuario });
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