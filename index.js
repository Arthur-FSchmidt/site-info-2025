const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

// Importa controllers
const professoresController = require('./src/controllers/professoresController');
const feirasController = require('./src/controllers/feirasController');
const curriculoController = require('./src/controllers/curriculoController');

// Adicionar css e bootstrap
app.use(express.static('public'));
const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/icons', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    let cards = [{titulo:"Semana da Informática", corpo:"Semana da Informática, é um evento que busca trazer conhecimento aos alunos do Curso Técnico em Informática, a respeito de carreira, mercado de trabalho e experiências.", link:"https://semanadainformatica.infocimol.com.br/"}, {titulo:"Currículo", corpo:"Currículo do curso de Informática, com a organização das disciplinas, competências desenvolvidas e a trajetória formativa que prepara o aluno para os desafios do mercado de tecnologia.", link:"/curriculo"}, {titulo:"Feiras", corpo:"Acompanhe os destaques das feiras e mostras científicas em que o curso de Informática marca presença, apresentando projetos inovadores desenvolvidos por nossos alunos como resultado de muita criatividade, pesquisa e dedicação.", link:"/feiras"}, {titulo:"Professores", corpo:"Profissionais qualificados e dedicados, que compartilham conhecimento e experiência para formar os futuros talentos da tecnologia.", link:"/professores"}, {titulo:"Podcast", corpo:"Um espaço de diálogo entre alunos e professores para discutir tecnologia, tendências do setor e os caminhos do mercado de trabalho na área da computação.", link:"/podcast"}]
    res.render('index', {title:"Informática", cards:cards});
});

app.get('/sobre', (req, res) => {
    res.render('sobre', {title:"Sobre - Informática"});
});

app.get('/curriculo', (req, res) => {
    res.render('curriculo', {title:"Currículo - Informática", diurno:curriculoController.getCurriculoDiurno(), noturno:curriculoController.getCurriculoNoturno()});
});

app.get('/feiras', (req, res) => {
    res.render('feiras', {title:"Feiras - Informática", feiras:feirasController.getFeiras()});
});

app.get('/professores', (req, res) => {
    res.render('professores', {title:"Professores - Informática", professores:professoresController.getProfessores()});
});

app.get('/podcast', (req, res) => {
    res.render('podcast', {title:"Podcast - Informática"});
});

app.use((req, res, next) => {
    res.render('404', {title:"Não encontrado - Informática"});
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});