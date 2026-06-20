const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 8080;
        
        // Definimos la propiedad con la ruta base de nuestros usuarios
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body (ESTA ES LA LÍNEA NUEVA 💡)
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        // Aplicamos el middleware de rutas cargando el archivo de routes/usuarios
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}

module.exports = Server;