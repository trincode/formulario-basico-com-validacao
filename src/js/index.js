const botaoEnviar = document.querySelector('.botao')

botaoEnviar.addEventListener('click', function(evento) {
    evento.preventDefault()

    const entradas = document.querySelectorAll('.campo')

    entradas.forEach(function(item) {
        const paiDaEntradaAtual = item.closest('div')
    
        if (item.value === '') {
            paiDaEntradaAtual.classList.add('erro')
            paiDaEntradaAtual.classList.remove('certo')
        } else {
            paiDaEntradaAtual.classList.add('certo')
            paiDaEntradaAtual.classList.remove('erro')
        }
    })
})


