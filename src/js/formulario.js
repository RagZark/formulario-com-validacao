const botao = document.getElementById("botao-enviar")

botao.addEventListener('click', function () {
    checarPreenchimento()

})

const checarPreenchimento = function(){
    const dadosPreenchidos = document.querySelectorAll('.caixa-de-texto')
    const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

    dadosPreenchidos.forEach((item) =>{
        if (item.value === ''){
            item.classList.add('nao-preenchido')
            camposObrigatorios.forEach((item) => {
                item.classList.remove('preencher')
            })
        } else{
            item.classList.remove('nao-preenchido')
            item.classList.add('preenchido')
            camposObrigatorios.forEach((item) => {
                item.classList.add('preencher')
            })
        }
    }) 
}

