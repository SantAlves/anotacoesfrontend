
// Estrutura condicional If;

let idade = 18;

if (idade == 18){
    console.log("Idade igual a 18!");
}
/*Observe que ele não imprime o valor abaixo pois a idade não é menor que 18*/ 
if (idade < 18){
    console.log("Idade igual a 18!");
}

// Estrutura condicional Else;

let velocidade = 90;

if(velocidade >= 100) {
    console.log("Você foi multado!");
}else{
    console.log("Se livrou!");
}

// Estrutura condicional Else If;

let valor_a = 3;
let valor_b = 5;

if(valor_a + valor_b == 3){
    console.log("Valor de a + b é 8");
}
else if(valor_a >= valor_b){
    console.log("Valor de a não é maior que valor de b");
}
else{
    console.log("Nenhuma das alternativas!");
}