let ul = document.querySelector(`ul`)
function openmenu(){
   ul.classList.add(`open`)
}
function closemenu(){
   ul.classList.remove(`open`)
}

async function carregarEventos() {
    const response = await fetch('YOUR_GOOGLE_DRIVE_API_ENDPOINT_FOR_EVENTOS');
    const data = await response.json();

    const listaEventos = document.getElementById("lista-eventos");
    listaEventos.innerHTML = ""; // Limpa a lista atual

    data.forEach(evento => {
        const eventoItem = document.createElement("div");
        eventoItem.classList.add("evento-item");
        eventoItem.innerHTML = `
            <div class="evento-info">
                <h3>${evento.titulo}</h3>
                <p><strong>Data:</strong> ${evento.data}</p>
                <p><strong>Descrição:</strong> ${evento.descricao}</p>
                <p><strong>Local:</strong> ${evento.local}</p>
                <img src="${evento.imagem}" class="evento-imagem" alt="Imagem do evento">
            </div>
        `;
        listaEventos.appendChild(eventoItem);
    });
}
document.addEventListener("DOMContentLoaded", () => {
   
    carregarEventos();
});

