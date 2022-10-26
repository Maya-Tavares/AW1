let contador = 0

let res = document.querySelector('section#result')

// as variaveis declaradas aqui fora sao globais

function contar(){
    contador++
    // é o mesmo que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques. </p>`
}

function zerar(){
    contador = 0;
    res.innerHTML = null
}