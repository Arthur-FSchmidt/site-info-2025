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

module.exports = { getFeiras, getFeira, addFeira, editFeira, deleteFeira };