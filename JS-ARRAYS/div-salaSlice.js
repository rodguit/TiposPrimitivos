//Desafio 4: Sala dividida
//Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

//'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
// 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata',
// 'Daisy', 'Camilo'

//Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

//const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//const sala1 = alunos.slice(0, alunos.length / 2);
//const sala2 = alunos.slice(alunos.length / 2);

//console.log(sala1);
//console.log(sala2);

//Desafio 5: Atualizando elementos
//Temos que criar uma lista de chamada com os seguintes alunos:

//João
//Ana
//Caio
//Lara
//Marjorie
//Leo
//Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

//const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
//nomes.splice(1, 2, "Rodrigo");

//console.log(nomes);


//Desafio 7: Lista com 2 dimensões
//Foram fornecidas duas listas para nós. A primeira contém os nomes de quatro estudantes e a segunda possui suas respectivas médias:

//'João', 'Juliana', 'Caio', 'Ana'
//10, 8, 7.5, 9
//Nosso objetivo é criar uma lista que contenha essas duas listas. Já adiantando: é possível uma lista conter outras listas. A seguir, vamos aprender como lidar com esse tipo de dado mais complexo.

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}.`);


