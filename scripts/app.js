let banner = document.querySelector('img');
let meuBotao = document.querySelector('#mudar-usuario');
let meuCabecalho = document.querySelector('h3');

banner.onclick = function () {
    let meuSrc = banner.getAttribute('src');
    console.log(meuSrc);
    if (meuSrc === 'imagens/tarde-neve.png') {
        banner.setAttribute('src', 'imagens/tarde-neve2.jpg');
    } else {
        banner.setAttribute('src', 'imagens/tarde-neve.png');
    }
}

meuBotao.onclick = function() { 
    defineNomeUsuario();
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(meuNome || meuNome !== null){
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Permaneça na paz, ' + meuNome;
    }
}

if (localStorage.getItem('nome')) {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Permaneça na paz, ' + nomeGuardado;
} else {
    defineNomeUsuario();
}