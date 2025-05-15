const professoresModel = require('../models/professoresModel');

async function getProfessores() {
    return await professoresModel.getProfessores();
}

async function addProfessor(professor) {
    await professoresModel.addProfessor(professor);
}

async function editProfessor(id, professor) {
    await professoresModel.editProfessor(id, professor);
}

async function deleteProfessor(id) {
    await professoresModel.deleteProfessor(id);
}

module.exports = { getProfessores, addProfessor, editProfessor, deleteProfessor };