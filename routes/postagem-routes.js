const express = require('express');
const router = express.Router();
const PostagemController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagemController = new PostagemController(PostagemModel);

router.get('/', async(req, res)=>{
    const postagens = await postagemController.consultarTodos();
    res.send(postagens)
});

router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    const postagem = await postagemController.consultarPorId(id);
    res.send(postagem)
});

router.post('/', async(req, res)=>{
    const novaPostagem = req.body;
    const retorno = await postagemController.adicionar(novaPostagem);
    res.send(retorno)
});

router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    const postagemDTO = req.body;
    await postagemController.alterarPorId(id, postagemDTO);
    res.send('alterado com sucesso!');
});

router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    await postagemController.removerPorId(id);
    res.send('removido com sucesso!') 
})

module.exports = router;