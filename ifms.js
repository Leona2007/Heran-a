




//Olá professor, pensei que a tarefa seria entregue ate as 23:59 da sexta, desculpe me pelo atraso













class Pessoa{
    constructor(nome, idade, cpf, email){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.email = email;
        
    }
    informacoes(){
        
        if(this.emailaluno != undefined){
            console.log(`A pessoa ${this.nome} estuda no ifms e seu email instituconal é ${this.emailaluno} `);
        }
        if(this.emailprof != undefined){
            console.log(`A pessoa ${this.nome} dá aula no ifms e seu email institucional é ${this.emailprof} `);
        }
        if(this.emailaluno == undefined && this.emailprof == undefined){
            console.log(`A pessoa ${this.nome} não trabalha e não estuda no ifms `);
        }
    }
}
class Aluno extends Pessoa{
    constructor(nome, idade, cpf, email, emailaluno){
    super(nome, idade, cpf, email)
    this.emailaluno = emailaluno
    }
}
class Professor extends Pessoa{
    constructor(nome, idade, cpf, email, emailprof){
        super(nome, idade, cpf, email)
        this.emailprof = emailprof
    }
}

let pessoa1 = new Aluno("Leonardo", 15, 231311131, "leonardo07paula2007@gmail.com", "leonardo.paula2@estudante.ifms")
let pessoa2 = new Professor("Julio", 40, 231311444, "juliocezar@gmail.com", "julio.cezar@ifms")
let pessoa3 = new Pessoa("Felipe", 23, 24335636343, "felipe01dasilva@gmail.com")
console.log("-----------------------------------------------------------------------------------");
pessoa1.informacoes()   
console.log("------------------------------------------------------------------------------------");
pessoa2.informacoes()
console.log("------------------------------------------------------------------------------------");   
pessoa3.informacoes()   
console.log("------------------------------------------------------------------------------------");