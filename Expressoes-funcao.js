
function minhaFuncao(param){
    // bloco de codigo
}

minhaFuncao("param")

//expressão de função

//const soma = function(n1, n2){
 //   return n1 + n2
//}
//console.log(soma(1, 1))


// difernça pricipal: hoisting
// 

//function apresentar() {
 //   return "ola";
//}

//console.log(soma(1, 1))
//const soma = function(n1, n2){
//    return n1 + n2;
//}

// Arrow function
function apresentar(nome){
    return `Meu nome é ${nome}`;
}
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10){
        return "Somente numeros de 1 a 9"
    } else {
        return n1 + n2;
    }
}



