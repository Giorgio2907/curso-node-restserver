//Paso 1 Iniciando el proyecto RESTServer//

require('dotenv').config(); // 
const Server = require('./models/server'); // 

const server = new Server(); // [cite: 13]
server.listen(); // [cite: 13]