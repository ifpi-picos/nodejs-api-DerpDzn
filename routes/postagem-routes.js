const express = require('express');
const router = express.Router();
const PostagemController = require('../controllers/postagens');
const PostagemModel = require('../model/postagem');

router.get('/', async(req, res)=>{
    const postagens = await PostagemController.consultarTodos();
    res.send(postagens)
});

router.post('/', (req, res)=>{
    const novaPostagem = req.body;
    const retorno = await PostagemController.adicionar(novaPostagem );
    res.send(retorno)
});

module.exports = router;