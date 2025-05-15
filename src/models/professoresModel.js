const db = require('./connection');

async function getProfessores() {
    const result = await db.query('SELECT * FROM site.professores ORDER BY id');
    return result.rows;
}

async function addProfessor(professor) {
    const { nome, sobre, foto } = professor;
    await db.query('INSERT INTO site.professores (nome, sobre, foto) VALUES ($1, $2, $3)', [nome, sobre, foto]);
}

async function editProfessor(id, professor) {
    const { nome, sobre, foto } = professor;
    await db.query('UPDATE site.professores SET nome = $1, sobre = $2, foto = $3 WHERE id = $4', [nome, sobre, foto, id]);
}

async function deleteProfessor(id) {
    await db.query('DELETE FROM site.professores WHERE id = $1', [id]);
}

module.exports = { getProfessores, addProfessor, editProfessor, deleteProfessor };