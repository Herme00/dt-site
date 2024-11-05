


let ul = document.querySelector(`ul`)
function openmenu(){
   ul.classList.add(`open`)
   
}
function closemenu(){
   ul.classList.remove(`open`)
}
  

async function carregarLivros() {
    const response = await fetch('YOUR_GOOGLE_DRIVE_API_ENDPOINT_FOR_LIVROS');
    const data = await response.json();

    const listaLivros = document.getElementById("lista-livros");
    listaLivros.innerHTML = ""; // Limpa a lista atual

    data.forEach(livro => {
        const livroItem = document.createElement("div");
        livroItem.classList.add("livro-item");
        livroItem.innerHTML = `
            <div class="livro-info">
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p><strong>Ano:</strong> ${livro.ano}</p>
                <p class="livro-descricao">${livro.descricao}</p>
                <a href="${livro.url}" target="_blank" class="livro-link">Acessar Livro</a>
            </div>
        `;
        listaLivros.appendChild(livroItem);
    });
}
document.addEventListener("DOMContentLoaded", () => {
   
    carregarLivros();
   
});