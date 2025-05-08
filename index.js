const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

// Importa controllers
const professoresController = require('./src/controllers/professoresController');
const feirasController = require('./src/controllers/feirasController');

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
    let diurno_formacao_geral = [{disciplina:"Filosofia", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"},{disciplina:"Geografia", ano1:"2", ano2:"1", ano3:"-", ha:"120", hr:"100h"}, {disciplina:"História", ano1:"2", ano2:"-", ano3:"2", ha:"160", hr:"134h"}, {disciplina:"Sociologia", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"}, {disciplina:"Biologia", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, {disciplina:"Física", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, {disciplina:"Química", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, {disciplina:"Arte", ano1:"2", ano2:"-", ano3:"-", ha:"80", hr:"67h"}, {disciplina:"Educação física", ano1:"1", ano2:"1", ano3:"1", ha:"120", hr:"100h"}, {disciplina:"Literatura", ano1:"1", ano2:"2", ano3:"2", ha:"200", hr:"166h"}, {disciplina:"Língua portuguesa", ano1:"4", ano2:"4", ano3:"3", ha:"440", hr:"366h"}, {disciplina:"Matemática", ano1:"4", ano2:"4", ano3:"3", ha:"440", hr:"366h"}, {disciplina:"Língua Espanhola", ano1:"1", ano2:"1", ano3:"-", ha:"80", hr:"67h"}, {disciplina:"Língua Inglesa", ano1:"2", ano2:"2", ano3:"2", ha:"240", hr:"200h"}, {disciplina:"Ensino Religioso", ano1:"1", ano2:"-", ano3:"-", ha:"40", hr:"34h"}]
    let diurno_formacao_profissional = [{disciplina: "Modelagem e Projeto de Banco de Dados", ano1: "-", ano2: "-", ano3: "4", ha: "160", hr: "134h"}, {disciplina: "Criação de Sites", ano1: "-", ano2: "3", ano3: "3", ha: "240", hr: "200h"}, {disciplina: "Design Grafico", ano1: "-", ano2: "2", ano3: "3", ha: "200", hr: "166h"}, {disciplina: "Manutenção de Microcomputadores", ano1: "-", ano2: "2", ano3: "-", ha: "80", hr: "67h"}, {disciplina: "Programação", ano1: "-", ano2: "4", ano3: "4", ha: "230", hr: "266h"}, {disciplina: "Redes de Computadores", ano1: "-", ano2: "-", ano3: "2", ha: "80", hr: "67h"}, {disciplina: "Sistemas Operacionais", ano1: "-", ano2: "3", ano3: "-", ha: "120", hr: "100h"}, {disciplina: "Ética", ano1: "-", ano2: "1", ano3: "-", ha: "40", hr: "33h"}, {disciplina: "Empreendedorismo", ano1: "-", ano2: "-", ano3: "1", ha: "40", hr: "33h"}, {disciplina: "Projeto de Pesquisa", ano1: "2", ano2: "2", ano3: "2", ha: "240", hr: "200h"}]
    let noturno = [{disciplina:"Programação I", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Projetos I", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Design Gráfico", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Sistemas Operacionais I", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Ética", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Criação de sites I", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Segurança da informação", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Programação II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Projetos II", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Sistemas Operacionais II", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Criação de sites II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Redes de computadores I", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Manutenção de computadores", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Banco de dados", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Modelagem de dados", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Programação III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Projetos III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Design Gráfico II", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}, {disciplina:"Redes de computadores II", periodos_semanais:"2p", periodos_totais:"40p", semestral:"32 horas"}, {disciplina:"Empreendedorismo", periodos_semanais:"3p", periodos_totais:"60p", semestral:"48 horas"}, {disciplina:"Criação de sites III", periodos_semanais:"5p", periodos_totais:"100p", semestral:"80 horas"}]
    res.render('curriculo', {title:"Currículo - Informática", diurno_formacao_geral:diurno_formacao_geral, diurno_formacao_profissional:diurno_formacao_profissional, noturno:noturno});
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