//Desafio 9: For
//Imprima o índice e a lista com os seguintes números:

//100, 200, 300, 400, 500, 600
//Sintaxe e funcionamento do for

//primeira expressao: é executada apenas uma unica vez
//segunada expressao: condição de execuçã
//terceira eptressao; é executada sempre ao final do bloco


//const numeros = [100, 200, 300, 400, 500, 600];

//for (let indice = 0; indice < 6; indice++) {
   // console.log(numeros[indice]);
//}

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}
const media = somaDasNotas / notas.length;

 console.log(`A média das notas é ${media}.`)

 //for of
 // for(let nota of notas){
    //somaDasNotas += nota;
    //}
 

