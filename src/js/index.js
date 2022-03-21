const listaselecaoboxeador = document.querySelectorAll('.boxer')
const boxeadorescard = document.querySelectorAll('.cartao-boxeador')

listaselecaoboxeador.forEach(boxeador => {
    boxeador.addEventListener('click', () => {
        const cartaoBoxeadorAberto = document.querySelector('.aberto')
        cartaoBoxeadorAberto.classList.remove('aberto')       

        const idboxeadorselecionado = boxeador.attributes.id.value
        const idDoCartaoBoxeadorParaAbrir = 'cartao-' + idboxeadorselecionado
        const cartaoBoxeadorParaAbrir = document.getElementById(idDoCartaoBoxeadorParaAbrir)
        cartaoBoxeadorParaAbrir.classList.add('aberto')
        const boxeadorAtivoNaListagem = document.querySelector('.ativo')
        boxeadorAtivoNaListagem.classList.remove('ativo')
        const boxeadorSelecionadoNaListagem = document.getElementById(idboxeadorselecionado)
        boxeadorSelecionadoNaListagem.classList.add('ativo')
    })
})