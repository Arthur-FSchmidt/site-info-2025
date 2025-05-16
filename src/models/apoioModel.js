const db = require('./connection');

// Função para buscar todos os apoiadores
async function getApoiadores() {
    const result = await db.query('SELECT * FROM site.apoiadores ORDER BY id');
    return result.rows;
}

// Função para adicionar um novo apoiador
async function addApoiador(apoiador) {
    const { nome, logo_path } = apoiador;
    await db.query('INSERT INTO site.apoiadores (nome, logo_path) VALUES ($1, $2)', [nome, logo_path]);
}

// Função para editar um apoiador existente
async function editApoiador(id, apoiador) {
    const { nome, logo_path } = apoiador;
    await db.query('UPDATE site.apoiadores SET nome = $1, logo_path = $2 WHERE id = $3', [nome, logo_path, id]);
}

// Função para deletar um apoiador
async function deleteApoiador(id) {
    await db.query('DELETE FROM site.apoiadores WHERE id = $1', [id]);
}

module.exports = { getApoiadores, addApoiador, editApoiador, deleteApoiador };