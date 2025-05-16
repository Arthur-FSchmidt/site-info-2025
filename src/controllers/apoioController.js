const apoioModel = require('../models/apoioModel');

async function getApoiadores() {
    return await apoioModel.getApoiadores();
}

async function addApoiador(apoiador) {
    await apoioModel.addApoiador(apoiador);
}

async function editApoiador(id, apoiador) {
    await apoioModel.editApoiador(id, apoiador);
}

async function deleteApoiador(id) {
    await apoioModel.deleteApoiador(id);
}

module.exports = { getApoiadores, addApoiador, editApoiador, deleteApoiador };