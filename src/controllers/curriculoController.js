const curriculoModel = require('../models/curriculoModel');

function getCurriculoDiurno() {
    return curriculoModel.getCurriculoDiurno();
}

function getCurriculoNoturno() {
    return curriculoModel.getCurriculoNoturno();
}

module.exports = { getCurriculoDiurno, getCurriculoNoturno };