import { runInThisContext } from "vm";

Class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }
    async adicionar (postagemDT0){
        const postagem = new this.Postagem(postagemDT0)
        await postagem.save();
        return 'Adicionado com sucesso';
    }

    async consultarTodso(){
        const postagem = await this.Postagem.find({});
        return postagem
    }
}

module.exports = Postagens;