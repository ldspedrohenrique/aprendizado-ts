// Interface e Implementação de Objetos com Métodos

interface Human {
  name: string;
  age: number;

  sayHi(): void; // Método para exibir uma saudação
}

// Implementação de um objeto do tipo Human, com as propriedades e o método definidos
const human1: Human = {
  name: "Pedro",
  age: 22,
  sayHi() {
    console.log("Hi"); // Implementação do método sayHi
  },
};

// Classe Representando um Usuário com Propriedades e Métodos

class User {
  private name: string; // Propriedade privada, apenas acessível dentro da classe
  private balance: number; // Propriedade privada para armazenar o saldo do usuário

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  // Método para exibir o nome do usuário
  sayMyName(): void {
    console.log(this.name);
  }

  // Método para adicionar dinheiro ao saldo do usuário
  addMoney(amount: number): void {
    this.balance += amount;
  }
}

// Instanciando um objeto da classe User
const user1: User = new User("Pedro", 100);

console.log(user1); // Exibe o objeto com os valores iniciais

// Adicionando dinheiro ao saldo do usuário
user1.addMoney(50);

console.log(user1); // Exibe o objeto após a adição do valor

// Index Signatures em Classes

// A assinatura de índice permite definir um objeto com chaves dinâmicas que seguem um tipo específico
class Notas {
  [materia: string]: number; // Chaves do tipo string e valores do tipo number
}

let notas = new Notas();

// Atribuindo valores às propriedades dinâmicas da classe Notas
notas.matematica = 100;
notas.historia = 80;

console.log(notas); // Exibe o objeto com as notas atribuídas

// Classes com Herança e Modificadores de Acesso

class Personnn {
  constructor(
    public firstName: string, // Propriedade pública
    public lastName: string, // Propriedade pública
    public age: number // Propriedade pública
  ) {}

  // Getter para saudação da pessoa
  public get greet(): string {
    return "Hi Person";
  }
}

// Classe Cliente herda de Personnn e adiciona uma nova propriedade e comportamento
class Client extends Personnn {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    public balance: number // Propriedade pública para o saldo do cliente
  ) {
    super(firstName, lastName, age); // Chama o construtor da classe base
  }

  // Sobrescreve o getter greet para uma saudação personalizada para o cliente
  override get greet(): string {
    return "Hello my dear Client";
  }
}

// Classe Staff herda de Personnn e altera a saudação para a equipe
class Staff extends Personnn {
  // Sobrescreve o getter greet para uma saudação personalizada para a equipe
  override get greet(): string {
    return "Hello my best Staff";
  }
}

// Exemplo de instâncias de cada classe

const client1 = new Client("Maria", "Silva", 30, 200);
console.log(client1.greet); // Exibe a saudação personalizada para o cliente

const staff1 = new Staff("João", "Costa", 40);
console.log(staff1.greet); // Exibe a saudação personalizada para a equipe
