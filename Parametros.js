

// parametro de funçoes


function soma(n1,n2) {
    return n1 + n2;
}
console.log(soma(2, 2))
console.log(soma(4, 50))
console.log(soma(7, 10))

function multiplica(n1 =1,n2 =2){
    return n1 * n2;
}
console.log(multiplica(soma(4, 5)));

// parametros x argumentos 

// ordem dos parametros 

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}
console.log(nomeIdade(40, "Rodrigo"));
