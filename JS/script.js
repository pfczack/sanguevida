let index = 0;
const imagens = document.querySelectorAll('.imgs img');
const totalImagens = imagens.length;

function mudarImagem() {
    // Remover a classe 'ativo' da imagem atual
    imagens[index].classList.remove('ativo');
    imagens[index].style.animation = 'fade-out 5s forwards'; // Inicia a animação de saída

    // Atraso para permitir que a animação termine antes de trocar a imagem
    setTimeout(() => {
        index = (index + 1) % totalImagens; // Muda para a próxima imagem

        // Ativa a nova imagem
        imagens[index].classList.add('ativo');
        imagens[index].style.animation = ''; // Reseta a animação para a nova imagem
    }, 4000); // Tempo da animação (igual ao tempo da animação fade-out)
}

// Inicia a troca de imagens
setInterval(mudarImagem, 2000); // Tempo total de troca (3s para sair + 3s para entrar)