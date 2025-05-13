const feirasModel = require('../models/feirasModel');

function getFeiras() {
    return feirasModel.getFeiras()
}

function getFeira(ano, nome) {
    let feiras = feirasModel.getFeiras();
    if (!feiras[ano]) {
        return null;
    }
    let feira = feiras[ano].find(f => f.nome === nome);
    if (!feira) {
        return null;
    }
    return feira;
}

module.exports = { getFeiras, getFeira };