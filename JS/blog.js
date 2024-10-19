document.getElementById('donationReg').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('inome').value;
    const tiposang = document.getElementById('itiposang').value;
    const msg = document.getElementById('imsg').value;
    const fotoInput = document.getElementById('ifoto');
    const foto = fotoInput.files[0];

    // Lê a imagem como URL
    const reader = new FileReader();
    reader.onloadend = function() {
        const article = {
            nome: nome,
            tiposang: tiposang,
            msg: msg,
            foto: reader.result // Armazena a imagem em base64
        };

        // Armazena o artigo no localStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));

        // Atualiza a exibição
        displayArticles();
        this.form.reset(); // Reseta o formulário
    };
    if (foto) {
        reader.readAsDataURL(foto); // Lê a imagem como URL
    }
});

// Função para exibir os artigos
function displayArticles() {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; // Limpa a exibição anterior

    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <h3>${article.nome} - Tipo: ${article.tiposang}</h3>
            <img src="${article.foto}" alt="Foto do doador" style="max-width: 200px;">
            <p>${article.msg}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });
}

// Exibe os artigos já armazenados ao carregar a página
window.onload = displayArticles;
