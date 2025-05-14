let professores = [
    { nome: "Cândido Luciano Farias", sobre: "Coordenador do Curso", foto: "/media/Candido.jpeg" },
    { nome: "Diego Cândido de Souza", sobre: "Professor", foto: "/media/Diego.jpeg" },
    { nome: "Helder Palharini de Mattos", sobre: "Professor", foto: "/media/Helder.jpg" },
    { nome: "Erai de Souza Junior", sobre: "Professor", foto: "/media/Erai.jpeg" },
    { nome: "Rodrigo Henrich", sobre: "Professor", foto: "/media/Rodrigo.jpg" }
];

function getProfessores() {
    return professores;
}

function addProfessor(professor) {
    professores.push(professor);
}

function editProfessor(index, professor) {
    if (professores[index]) {
        professores[index] = professor;
    }
}

function deleteProfessor(index) {
    if (professores[index]) {
        professores.splice(index, 1);
    }
}

module.exports = { getProfessores, addProfessor, editProfessor, deleteProfessor };