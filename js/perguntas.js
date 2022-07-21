let correto;
let incorreto;
let opcoes;

function novaPergunta () {
    correto = document.querySelector('#correct');
    incorreto = document.querySelector('#incorrect');
    opcoes = document.querySelector('.opcoes');
}

novaPergunta();

console.log(opcoes);

opcoes.addEventListener('click', (event) => {

    if (event.path[0].id == 'correct') {
        event.path[0].classList.add('acertou')
        next();
    } else if (event.path[0].id == 'incorrect') {
        event.path[0].classList.add('errou');
        let correto = document.querySelector('#correct');
        console.log(correto);
        correto.classList.add('acertou')
        next();
    } 
});

function next() {
    
}




