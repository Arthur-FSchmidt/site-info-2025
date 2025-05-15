const feirasModel = require('../models/feirasModel');

// Função para buscar todas as feiras e organizá-las por ano
async function getFeiras() {
    const feiras = await feirasModel.getFeiras();

    // Reestruturar os dados em um objeto organizado por ano
    const feirasPorAno = feiras.reduce((acc, feira) => {
        const { ano } = feira;
        if (!acc[ano]) {
            acc[ano] = []; // Inicializa o array para o ano, se ainda não existir
        }
        acc[ano].push(feira); // Adiciona a feira ao ano correspondente
        return acc;
    }, {});

    return feirasPorAno; // Retorna o objeto com as feiras organizadas por ano
}

// Função para buscar uma feira específica
async function getFeira(ano, nome) {
    return await feirasModel.getFeira(ano, nome);
}

module.exports = { getFeiras, getFeira };