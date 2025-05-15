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

module.exports = { getFeiras, getFeira };