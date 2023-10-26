//Desafio 3: Deletando elementos
//Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:

//10
//6
//8
//5.5
//10
//Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.

const notas= [10,6,8,5.5,10];

notas.pop(10);

console.log(notas);

const media = (notas[0] + notas [1] + notas[2] + notas [3]) / notas.length;

console.log(`A média é ${media}`);


jantarDeHoje = ['🍔', '🌭', '🍕']

jantarDeHoje.pop()
jantarDeHoje.pop()

jantarDeHoje.push('🍳')
jantarDeHoje.push('🥗')
jantarDeHoje.push('🍏')

console.log(jantarDeHoje)
