const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false); // evita el warning que viste
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('La Base de datos esta en On Line');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = { dbConnection };