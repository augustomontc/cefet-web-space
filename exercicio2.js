// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let imagemAtual = 0
document.querySelectorAll('.controle').forEach((button) => {
  button.addEventListener('click', (event) => {
    if(event.target.id === 'proximo') {
      imagemAtual++
      if(imagemAtual >= todasAsImagens.length) {
        imagemAtual = 0
      }
    } else {
      imagemAtual--
      if(imagemAtual < 0) {
        imagemAtual = todasAsImagens.length - 1
      }
    }
    document.querySelector('#slide').src = servidorDasImagens + todasAsImagens[imagemAtual]
  })
})