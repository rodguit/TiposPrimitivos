const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((aluno, i) => {
    return medias[i] >= 7 ;

})
console.log(reprovados);


const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function caculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)

    const media = somaDasNotas / notasDaSala.length;
}

caculaMedia(salaJS);


