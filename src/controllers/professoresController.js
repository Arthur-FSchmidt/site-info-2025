const professoresModel = require('../models/professoresModel');

function getProfessores() {
    return professoresModel.getProfessores();
}

function addProfessor(professor) {
    professoresModel.addProfessor(professor);
}

function editProfessor(index, professor) {
    professoresModel.editProfessor(index, professor);
}

function deleteProfessor(index) {
    professoresModel.deleteProfessor(index);
}

module.exports = { getProfessores, addProfessor, editProfessor, deleteProfessor };