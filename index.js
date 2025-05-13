const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

// Importa controllers
const professoresController = require('./src/controllers/professoresController');
const feirasController = require('./src/controllers/feirasController');
const curriculoController = require('./src/controllers/curriculoController');
const homeCardsController = require('./src/controllers/homeCardsController');
const semanaInfoController = require('./src/controllers/semanaInfoController');

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
    res.render('index', {title:"Informática", cards:homeCardsController.getCards()});
});

app.get('/sobre', (req, res) => {
    res.render('sobre', {title:"Sobre - Informática"});
});

app.get('/semanadainformatica', (req, res) => {
    res.render('semanadainformatica', {title:"Semana da Informática - Informática"});
});

app.get('/semanadainformatica/:ano', (req, res) => {
    const ano = req.params.ano;
    const semanaInfo = semanaInfoController.getAno(ano);
    if (!semanaInfo) {
        return res.status(404).render('404', {title:"Não encontrado - Informática"});
    }
    res.render('semanaInfoEdicoes', {title:"Semana da Informática - Informática", edicao:semanaInfo});
});

app.get('/curriculo', (req, res) => {
    res.render('curriculo', {title:"Currículo - Informática", diurno:curriculoController.getCurriculoDiurno(), noturno:curriculoController.getCurriculoNoturno()});
});

app.get('/feiras', (req, res) => {
    res.render('feiras', {title:"Feiras - Informática", feiras:feirasController.getFeiras()});
});

app.get('/feiras/:ano/:nome', (req, res) => {
    const ano = req.params.ano;
    const nome = req.params.nome;
    const feira = feirasController.getFeira(ano, nome);
    if (!feira) {
        return res.status(404).render('404', {title:"Não encontrado - Informática"});
    }
    let title = feira.nome + " " + feira.ano + " - Informática"; 
    res.render('feira', {title:title, feira:feira});
});

app.get('/professores', (req, res) => {
    res.render('professores', {title:"Professores - Informática", professores:professoresController.getProfessores()});
});

app.get('/podcast', (req, res) => {
    res.render('podcast', {title:"Podcast - Informática"});
});

app.use((req, res, next) => {
    res.status(404).render('404', {title:"Não encontrado - Informática"});
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});