let professores = 
    [{nome:"Cândido Luciano Farias", sobre:"Coordenador do Curso", foto:"media/Candido.jpeg"}, 
    {nome:"Diego Cândido de Souza", sobre:"Professor", foto:"media/Diego.jpeg"},
    {nome:"Helder Palharini de Mattos", sobre:"Professor", foto:"media/Helder.jpg"}, 
    {nome:"Erai de Souza Junior", sobre:"Professor", foto:"media/Erai.jpeg"}, 
    {nome:"Rodrigo Henrich", sobre:"Professor", foto:"media/Rodrigo.jpg"}]

function getProfessores() {
    return professores;
}
module.exports = { getProfessores };