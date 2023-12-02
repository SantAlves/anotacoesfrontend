

//Estrutura de repetição: while
// Ex 1
let x = 10;

while (x > 0){
    console.log("O valor de x é " + x);
    x = x - 1;
}

// Ex 2

let y = 0;

while(y <= 10){
    console.log("O valor de y é " + y);
    y = y + 1;
}

//Estrutura de repetição: do while
// Ex 1

let z = 100;

do{
    console.log(z/2);
    z = z - 5;
}while(z >= 0)

//Estrutura de repetição: for
// Ex 1

for(let i = 0; i < 100; i = i + 10){
    console.log(`A soma de i + 10 é : ${i + 10}`);
}

//Estrutura de repetição: loop
// Ex 1


for(let i = 0; i < 10; i = i + 1){

    if(i == 3){
        console.log(" i = 3 ? imprime -> Teste");
    }

    if(i == 5 && i >= 5){
        console.log("i = 2 e i >= 5 ? imprime -> Teste 2 e Para!");
        break;
    }
    console.log(i);

}
