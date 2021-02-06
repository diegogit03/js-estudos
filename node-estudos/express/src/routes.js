const express = require('express');
const router = express.Router();

const HomeController = require('./controllers/HomeController');
const ContatoController = require('./controllers/ContatoController');

// middlewares

function middleware(req, res, next){
    console.log('Passei no teu middleware');

    next();
};

// Controllers da Home
router.get('/', middleware, HomeController.renderizarPaginaInicial);
router.post('/', HomeController.criarUser);

// Controllers do contato
router.get('/contato', ContatoController.renderizarPagina);

module.exports = router;