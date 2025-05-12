let cards = [
    {titulo:"Semana da Informática", corpo:"Semana da Informática, é um evento que busca trazer conhecimento aos alunos do Curso Técnico em Informática, a respeito de carreira, mercado de trabalho e experiências.", link:"https://semanadainformatica.infocimol.com.br/"}, 
    {titulo:"Currículo", corpo:"Currículo do curso de Informática, com a organização das disciplinas, competências desenvolvidas e a trajetória formativa que prepara o aluno para os desafios do mercado de tecnologia.", link:"/curriculo"}, 
    {titulo:"Feiras", corpo:"Acompanhe os destaques das feiras e mostras científicas em que o curso de Informática marca presença, apresentando projetos inovadores desenvolvidos por nossos alunos como resultado de muita criatividade, pesquisa e dedicação.", link:"/feiras"}, 
    {titulo:"Professores", corpo:"Profissionais qualificados e dedicados, que compartilham conhecimento e experiência para formar os futuros talentos da tecnologia.", link:"/professores"}, 
    {titulo:"Podcast", corpo:"Um espaço de diálogo entre alunos e professores para discutir tecnologia, tendências do setor e os caminhos do mercado de trabalho na área da computação.", link:"/podcast"}
];

function getCards() {
    return cards;
}

module.exports = { getCards };
