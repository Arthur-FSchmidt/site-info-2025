const db = require('./connection');

// Função para buscar todas as feiras com imagens adicionais
async function getFeiras() {
    const query = `
        SELECT f.id, f.ano, f.nome, f.descricao, f.imagem_path,
               COALESCE(
                   json_agg(
                       json_build_object('id', i.id, 'nome', i.nome, 'path', i.path)
                   ) FILTER (WHERE i.id IS NOT NULL), '[]'
               ) AS imagens
        FROM site.feiras f
        LEFT JOIN site.feiras_imagens i ON f.id = i.feira_id
        GROUP BY f.id
        ORDER BY f.ano DESC;
    `;
    const result = await db.query(query);
    return result.rows;
}

// Função para buscar uma feira específica com imagens adicionais
async function getFeira(ano, nome) {
    const query = `
        SELECT f.id, f.ano, f.nome, f.descricao, f.imagem_path,
               COALESCE(
                   json_agg(
                       json_build_object('id', i.id, 'nome', i.nome, 'path', i.path)
                   ) FILTER (WHERE i.id IS NOT NULL), '[]'
               ) AS imagens
        FROM site.feiras f
        LEFT JOIN site.feiras_imagens i ON f.id = i.feira_id
        WHERE f.ano = $1 AND f.nome = $2
        GROUP BY f.id;
    `;
    const result = await db.query(query, [ano, nome]);
    return result.rows[0];
}

// Função para adicionar uma nova feira
async function addFeira(feira) {
    const { nome, ano, descricao, imagem_path } = feira;
    await db.query(
        'INSERT INTO site.feiras (nome, ano, descricao, imagem_path) VALUES ($1, $2, $3, $4)',
        [nome, ano, descricao, imagem_path]
    );
}

// Função para editar uma feira existente
async function editFeira(id, feira) {
    const { nome, ano, descricao, imagem_path } = feira;
    await db.query(
        'UPDATE site.feiras SET nome = $1, ano = $2, descricao = $3, imagem_path = $4 WHERE id = $5',
        [nome, ano, descricao, imagem_path, id]
    );
}

// Função para deletar uma feira
async function deleteFeira(id) {
    await db.query('DELETE FROM site.feiras WHERE id = $1', [id]);
}

// Função para buscar imagens adicionais de uma feira
async function getImagensByFeiraId(feiraId) {
    const query = `
        SELECT id, nome, path
        FROM site.feiras_imagens
        WHERE feira_id = $1
        ORDER BY id;
    `;
    const result = await db.query(query, [feiraId]);
    return result.rows;
}

// Função para adicionar uma nova imagem
async function addImagem(feiraId, imagem) {
    const { nome, path } = imagem;
    await db.query(
        'INSERT INTO site.feiras_imagens (feira_id, nome, path) VALUES ($1, $2, $3)',
        [feiraId, nome, path]
    );
}

// Função para editar uma imagem existente
async function editImagem(id, imagem) {
    const { nome, path } = imagem;
    await db.query(
        'UPDATE site.feiras_imagens SET nome = $1, path = $2 WHERE id = $3',
        [nome, path, id]
    );
}

// Função para deletar uma imagem
async function deleteImagem(id) {
    await db.query('DELETE FROM site.feiras_imagens WHERE id = $1', [id]);
}

module.exports = { getFeiras, getFeira, addFeira, editFeira, deleteFeira, getImagensByFeiraId, addImagem, editImagem, deleteImagem };