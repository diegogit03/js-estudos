const HomeModel = require('../models/HomeModel');

exports.renderizarPaginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'usuario', logado: true } 
    // req.flash('info', 'Olá, mundo!');
    // req.flash('error', 'asdasd');
    // req.flash('success', 'ansfoia');
    console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    HomeModel.find().then(data => {
        console.log(data);
        res.render('index', {data});
    });
}

exports.criarUser = (req, res) => {
    const { titulo } = req.body;
    const { descricao } = req.body;
    HomeModel.create({
        titulo,
        descricao
    }).then(data => {
        console.log(data);
        res.redirect('/');
    }).catch(error => {
        console.log(error);
    });
}