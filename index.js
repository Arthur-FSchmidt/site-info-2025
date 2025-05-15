const express = require('express');
const session = require('express-session');
const cors = require('cors');
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

// Configurar sessões
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Use secure: true em produção com HTTPS
}));

// Configurar CORS
const corsOptions = {
    origin: '*', // Permite todas as origens. Substitua por um domínio específico, se necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

// Aplicar o middleware CORS
app.use(cors(corsOptions));

// Middleware para verificar autenticação
function authMiddleware(req, res, next) {
    if (req.session && req.session.isAuthenticated) {
        return next(); // Permite o acesso à rota
    }
    res.status(403).render('403', { title: "Acesso Negado - Informática" });
}

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

// Rotas administrativas

// Rota para exibir o formulário de login
app.get('/admin', (req, res) => {
    res.render('admin-login', { title: "Login Administrativo - Informática" });
});

// Rota protegida (exige autenticação)
app.post('/admin', (req, res) => {
    const { password } = req.body;

    // Verifica se a senha enviada corresponde à senha do .env
    if (password === process.env.ADMIN_PASSWORD) {
        req.session.isAuthenticated = true; // Salva o estado de autenticação na sessão
        return res.redirect('/admin/dashboard');
    }

    // Caso a senha esteja errada, retorna um erro 403 (Proibido)
    res.status(403).render('403', { title: "Acesso Negado - Informática" });
});

// Rota para o painel administrativo
app.get('/admin/dashboard', authMiddleware, (req, res) => {
    res.render('admin-dashboard', { title: "Painel Administrativo - Informática" });
});

// Rota para listar professores no painel administrativo
app.get('/admin/professores', authMiddleware, (req, res) => {
    const professores = professoresController.getProfessores();
    res.render('admin-professores', { title: "Gerenciar Professores", professores });
});

// Rota para adicionar um professor
app.post('/admin/professores/add', authMiddleware, (req, res) => {
    const { nome, sobre, foto } = req.body;
    professoresController.addProfessor({ nome, sobre, foto });
    res.redirect('/admin/professores');
});

// Rota para editar um professor
app.post('/admin/professores/edit/:index', authMiddleware, (req, res) => {
    const index = req.params.index;
    const { nome, sobre, foto } = req.body;
    professoresController.editProfessor(index, { nome, sobre, foto });
    res.redirect('/admin/professores');
});

// Rota para excluir um professor
app.post('/admin/professores/delete/:index', authMiddleware, (req, res) => {
    const index = req.params.index;
    professoresController.deleteProfessor(index);
    res.redirect('/admin/professores');
});

// Rota para logout
app.get('/admin/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/admin');
    });
});

// Erro 404

app.use((req, res, next) => {
    res.status(404).render('404', {title:"Não encontrado - Informática"});
});

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});