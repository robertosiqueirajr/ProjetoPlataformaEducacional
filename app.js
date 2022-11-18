// Escolha de cursos CARD
const aulas = ['violao', 'guitarra', 'violino', 'bateria', 'contraBaixo']

function mostrarAulas(aula){
    aulas.forEach(item => document.getElementById(item).setAttribute('class', `${item === aula ? 'show' : 'hide'}`))
    // document.getElementById('violao').setAttribute('class', 'hide')
    // document.getElementById('guitarra').setAttribute('class', 'show')
}