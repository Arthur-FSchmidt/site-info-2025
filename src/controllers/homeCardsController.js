const homeCardsModel = require('../models/homeCardsModel');

function getCards() {
    return homeCardsModel.getCards()
}

module.exports = { getCards };