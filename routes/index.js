module.exports=router;

const express = require('express');

const router = express.router();

router.get('/', (req, res)=>{
    res.send('App ta ON k7!!')
});

router.use((req, res, next)=>{
    console.log('Time: ', Date.now());
    next();
})

