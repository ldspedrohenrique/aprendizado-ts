// Tipo Any

let qualquerValor: any = "Pedro"; // Variável que pode aceitar diferentes tipos de valores ao longo do tempo

qualquerValor = 12; // Alterando o tipo de valor para um número

//

let valorDesconhecido: unknown = "PS"; // Variável que pode aceitar diferentes tipos de valores, mas exige uma validação de tipo antes de ser utilizada

// console.log(valorDesconhecido.toLowerCase()); // Erro: não é possível invocar métodos diretamente sem validar o tipo da variável

if (typeof valorDesconhecido === "string") {
  console.log(valorDesconhecido.toLowerCase()); // A validação do tipo é feita, e a variável é tratada como string
}

// Arrays

let nomesLista: string[] = ["Pedro", "Louis"]; // Lista de nomes com o tipo explicitamente definido como string[]

nomesLista.push("Maria"); // Adicionando um nome à lista

console.log(nomesLista); // Exibindo a lista atualizada

// Tuplas

let nomeComIdade: [string, number] = ["Pedro", 22]; // Definindo uma tupla com o primeiro elemento como string e o segundo como number

// Enums

enum TiposDeUsuario {
  leitor, // O valor default será 0
  editor, // O valor default será 1
  administrador, // O valor default será 2
}

console.log(TiposDeUsuario.leitor); // Exibindo o valor associado ao tipo 'leitor'

// Funções

function soma(numero1: number, numero2: number): number {
  return numero1 + numero2; // Função que retorna a soma de dois números
}

// Função que não retorna um valor, retornando 'undefined' por padrão
function exibirMensagem(mensagem: string): void {
  console.log(mensagem); // Exibindo a mensagem passada como argumento
}

console.log(exibirMensagem("Olá")); // Executa a função e retorna undefined

// O tipo never é utilizado em funções ou blocos de código que não completam sua execução normalmente, como em um lançamento de erro.

function funcaoSemRetorno(mensagem: string): never {
  throw new Error(mensagem); // A execução nunca chega ao final devido ao lançamento de erro
}

// Alias

// Exemplo de declaração de tipo com alias
// const pedro: {
//   name: string;
//   age: number;
// } = {
//   name: "Pedro",
//   age: 22,
// };

// Ao usar o alias, podemos definir o tipo das propriedades de forma centralizada e reutilizá-las facilmente

type Pessoa = {
  name: string; // Nome da pessoa
  age: number; // Idade da pessoa
};

const pedroPessoa: Pessoa = {
  name: "Pedro",
  age: 22,
};

const liviaPessoa: Pessoa = {
  name: "Livia",
  age: 21,
};

console.log(pedroPessoa, liviaPessoa); // Exibindo as duas pessoas

// Literal type

// Permite especificar os valores exatos que uma variável pode assumir, restringindo os valores possíveis
type Tamanho = "P" | "M" | "G";

let tamanho: Tamanho;

tamanho = "G"; // Atribuindo um valor válido de acordo com a definição do tipo literal

// Intersection

type Pessoas = {
  name: string;
  age: number;
};

type Regras = {
  id: number;
  description: string;
};

// Criando um novo tipo combinando as propriedades de Pessoas e Regras
type Funcionario = Pessoas & Regras;

const pedroFuncionario: Funcionario = {
  name: "Pedro",
  age: 22,
  id: 404,
  description: "Um excelente funcionário, modéstia à parte", // Descrição do funcionário
};

// Novo código - Type Aliases

type NumeroOuString = number | string; // Definindo um alias para tipos numéricos ou strings

// Função que soma dois valores, podendo ser números ou strings, com validação de tipo
function somaNumeroOuString(input1: NumeroOuString, input2: NumeroOuString) {
  // O objetivo do TypeScript é garantir que você sempre saiba o tipo do valor com o qual está lidando, facilitando a operação

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2; // Aqui, TypeScript sabe que ambos os valores são números
  }
  // else {
  //   return input1 + input2; // TypeScript geraria um erro, pois não sabemos se ambos são strings
  // }
  return;
}

function concatenar(input1: string, input2: number) {
  return input1 + input2; // Concatenando uma string com um número
}

// noImplicitAny

// Exemplo de erro que ocorreria caso o tipo não fosse explicitado

// function funcaoValidacao(qualquerTipo) {
//   console.log(qualquerTipo);
// }

// Aqui, o tipo é explicitamente declarado como "any", evitando o erro

function funcaoValidacao(tipoQualquer: any) {
  console.log(tipoQualquer); // Exibindo o valor de qualquer tipo, sem restrições
}
