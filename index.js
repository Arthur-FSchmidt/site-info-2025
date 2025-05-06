const express = require('express');
const app = express();
require('dotenv').config();
app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');

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
  res.render('index', {title:"Informática"});
});

app.get('/sobre', (req, res) => {
  res.render('sobre', {title:"Sobre - Informática"});
});

app.get('/curriculo', (req, res) => {
  res.render('curriculo', {title:"Currículo - Informática"});
});

app.get('/feiras', (req, res) => {
  res.render('feiras', {title:"Feiras - Informática"});
});

app.get('/professores', (req, res) => {
  res.render('professores', {title:"Professores - Informática"});
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