const { Router } = require('express');
const { 
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete, 
    usuariosPatch 
} = require('../controller/usuarios'); // Importamos las funciones del controlador

const router = Router();

// Configuramos las rutas apuntando a sus funciones correspondientes
router.get('/', usuariosGet );
// El /:id le dice a Express que lo que venga después de la barra será una variable llamada id
router.put('/:id', usuariosPut );
router.post('/', usuariosPost );
router.delete('/', usuariosDelete );
router.patch('/', usuariosPatch );

module.exports = router;