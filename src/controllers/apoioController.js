const apoio = require('../models/apoioModel');

function getApoiadores() {
    const apoiadores = apoio.getApoiadores();
    return apoiadores;
}

module.exports = { getApoiadores };