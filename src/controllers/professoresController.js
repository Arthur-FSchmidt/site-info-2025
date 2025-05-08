const professoresModel = require('../models/professoresModel');

function getProfessores() {
    return professoresModel.getProfessores();
}

module.exports = { getProfessores };