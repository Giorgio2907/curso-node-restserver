const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores);
    }
    next();   // si no hay errores, deja pasar al siguiente paso
}

module.exports = {
    validarCampos
}