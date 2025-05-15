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

// Função para adicionar uma nova feira
async function addFeira(feira) {
    await feirasModel.addFeira(feira);
}

// Função para editar uma feira existente
async function editFeira(id, feira) {
    await feirasModel.editFeira(id, feira);
}

// Função para deletar uma feira
async function deleteFeira(id) {
    await feirasModel.deleteFeira(id);
}

// Função para buscar imagens adicionais de uma feira
async function getImagensByFeiraId(feiraId) {
    return await feirasModel.getImagensByFeiraId(feiraId);
}

// Função para adicionar uma nova imagem
async function addImagem(feiraId, imagem) {
    await feirasModel.addImagem(feiraId, imagem);
}

// Função para editar uma imagem existente
async function editImagem(id, imagem) {
    await feirasModel.editImagem(id, imagem);
}

// Função para deletar uma imagem
async function deleteImagem(id) {
    await feirasModel.deleteImagem(id);
}

module.exports = { getFeiras, getFeira, addFeira, editFeira, deleteFeira, getImagensByFeiraId, addImagem, editImagem, deleteImagem };