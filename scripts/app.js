let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/tarde-neve.png') {
      minhaImagem.setAttribute ('src','imagens/tarde-neve2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/tarde-neve.png');
    }
}