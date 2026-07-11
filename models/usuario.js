const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre:   { type: String, required: [true, 'El nombre es obligatorio'] },
    correo:   { type: String, required: [true, 'El correo es obligatorio'], unique: true },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img:      { type: String },
    rol:      { type: String, required: true, default: 'USER_ROLE' },
    estado:   { type: Boolean, default: true },
    google:   { type: Boolean, default: false }
});

// Oculta password y v en las respuestas, y renombra _id a uid
UsuarioSchema.methods.toJSON = function() {
    const { v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);