const semanaInfoModel = require('../models/semanaInfoModel');

function getSemanaInfo() {
    return semanaInfoModel.getSemanaInfo();
}

function getAno(ano) {
    return semanaInfoModel.getAno(ano);
}

module.exports = { getSemanaInfo, getAno };