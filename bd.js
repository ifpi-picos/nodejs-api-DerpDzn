class Bd{
    constructor(){
        this.alunos =[];
        this.professores =[];
    }

    getAlunos(){
        return this.alunos;
    }

    getAlunosPorId(){
        return this.alunos.filter((aluno){
            return aluno.id == id;
        });
    }

    addAluno(aluno){
        this.alunos.push(aluno);
    }
    getProfessores(){
        return this.professores;
    }

    getProfessoresPorId(){
        return this.professores.filter((professores){
            return professores.id == id;
})}

    addProfessores(professores){
        this.professores.push(professores);
    }
}

module.exports = new Bd()