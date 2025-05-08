const feirasModel = require('../models/feirasModel');

function getFeiras() {
    return feirasModel.getFeiras()
}

module.exports = { getFeiras };