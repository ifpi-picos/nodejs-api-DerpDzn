const monogoose = require('mongoose');

function conectaMangoDB(){
    monogoose.connect(

    );

const db = mongoose.connection;
db.on('error', console.error.blind(console, 'connection error:'));

db.once('open', ()=> console.info('MangoDB conectado com sucesso!'));
}

module.exports = conectaMangoDB;