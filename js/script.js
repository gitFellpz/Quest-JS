function verificadorCampos(){
    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const mensagem = document.getElementById('mensagem')
    const camposObrigatorios = document.querySelectorAll('.c__obrigatorio')

    // Nome
    if(nome.value === ""){
        AdicionarRemover(nome)
        camposObrigatorios[0].classList.add('c__ativado')

    }
    else{
        RemoverAdicionar(nome)
        camposObrigatorios[0].classList.remove('c__ativado')
    }

    // Email
    if(email.value === ""){
        AdicionarRemover(email)
        camposObrigatorios[1].classList.add('c__ativado')

    }
    else{
        RemoverAdicionar(email)
        camposObrigatorios[1].classList.remove('c__ativado')
    }


    // Telefone
    if(telefone.value === ""){
        AdicionarRemover(telefone)
        camposObrigatorios[2].classList.add('c__ativado')

    }
    else{
        RemoverAdicionar(telefone)
        camposObrigatorios[2].classList.remove('c__ativado')
    }

    
    // Mensagem
    if(mensagem.value === ""){
        AdicionarRemover(mensagem)
        camposObrigatorios[3].classList.add('c__ativado')

    }
    else{
        RemoverAdicionar(mensagem)
        camposObrigatorios[3].classList.remove('c__ativado')
    }

    // Código abaixo é apenas para UX (usuário saber que o formulário foi enviado com sucesso)

    if((nome.value != "") && (email.value != "") && (telefone.value != "") && (mensagem.value != "")){
        alert('Formulário enviado com sucesso')
    }
}

function AdicionarRemover(variavel){
    variavel.classList.add('borda__vermelha')
    variavel.classList.remove('borda__verde')
}
function RemoverAdicionar(variavel){
    variavel.classList.remove('borda__vermelha')
    variavel.classList.add('borda__verde')
}
