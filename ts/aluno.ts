class Aluno {
    nome: string;
    idade: number;
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar(): string {
        return `Olá! Meu nome é ${this.nome} e estou cursando ${this.curso}.`;
    }
}

export default Aluno;