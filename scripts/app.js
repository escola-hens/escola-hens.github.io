let banner = document.querySelector('img');

banner.onclick = function () {
    let meuSrc = banner.getAttribute('src');
    console.log(meuSrc);
    if (meuSrc === 'imagens/tarde-neve.png') {
        banner.setAttribute('src', 'imagens/tarde-neve2.jpg');
    } else {
        banner.setAttribute('src', 'imagens/tarde-neve.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h3');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(meuNome){
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