class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }
    async adicionar (postagemDTO){
        const postagem = new this.Postagem(postagemDTO)
        await postagem.save();
        return 'Adicionado com sucesso';
    }

    async consultarTodos(){
        const postagem = await this.Postagem.find({});
        return postagem;
    }

    async consultarPorId(id){
        const postagem = await this.Postagem.findById(id);
        return postagem;
    }

    async alterarPorId(id, postagemDTO){
        await this.Postagem.updateOne({_id: id}, postagemDTO);
    }

    async removerPorId(id, postagemDTO){
        await this.Postagem.deleteOne({_id: id}, postagemDTO);
    }
}

module.exports = Postagens;