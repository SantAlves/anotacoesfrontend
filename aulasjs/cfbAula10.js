// Exemplo de operador ternário simples
let idade = 18;
let voto = idade >= 18 ? "Sim" : "Não";
console.log(voto)

// Exemplo de operador ternário com atribuição
let nome = "João";
let saudacao = nome === "João" ? "Olá, João!" : "Olá, visitante!";
console.log(saudacao)


// Exemplo curioso dado na aula. Se o resto de 10/2 é zero...ou seja, %2 (mode 2 por 10) 
// Por que o resultado não imprime "Par"?

let num =11;
res=(!(num%2) ? "Par" : "Ímpar")
console.log(res);

// 0 é falso e 1 é verdadeiro. Como o resto deu zero, então ele cai na segunda opção "Ímpar (0)"

