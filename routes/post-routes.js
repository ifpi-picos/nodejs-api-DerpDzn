const express = require('express');
const router = express.Router

router.get('/', (req, res)=>{
    res.send('Lista de postagens!')
});

router.post('/', (req, res)=>{
    res.send('postagem salva!')
});

module.exports = router;