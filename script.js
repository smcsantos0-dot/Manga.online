// Passo 1 - Listar paginas
const pages = [
    "./Assets Hxh/hunter-x-hunter-vol-1-9781591167532_hr.jpg",
    "./Assets Hxh/1.png",
    "./Assets Hxh/2.png",
    "./Assets Hxh/3.png",
    "./Assets Hxh/4.png",
    "./Assets Hxh/5.png",
    "./Assets Hxh/6.png",
    "./Assets Hxh/7.png",
    "./Assets Hxh/8.png",
    "./Assets Hxh/9.png",
    "./Assets Hxh/10.png",
    "./Assets Hxh/11.png",
    "./Assets Hxh/12.png",
    "./Assets Hxh/13.png",
    "./Assets Hxh/14.png",
    "./Assets Hxh/15.png",
    "./Assets Hxh/16.png",
    "./Assets Hxh/17.png",
    "./Assets Hxh/18.png",
    "./Assets Hxh/19.png",
    "./Assets Hxh/20.png",
    "./Assets Hxh/21.png",
    "./Assets Hxh/22.png",
    "./Assets Hxh/23.png",
    "./Assets Hxh/24.png",
    "./Assets Hxh/25.png",
    "./Assets Hxh/26.png",
    "./Assets Hxh/27.png",
    "./Assets Hxh/28.png",
    "./Assets Hxh/29.png",
    "./Assets Hxh/30.png",
]

// Passo 2 - Contagem da Lista
let currentPageIndex = 0;

// Passo 3 - Seleção dos documentos Dom
const imgElement = document.getElementById("manga-page");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageCounter = document.getElementById("page-counter");

// Passo 4 - Funções para atualizar a tela
function updateReader(){
    // Passo 1 - Atualizar Imagem
    imgElement.src = pages [currentPageIndex];

    // Passo 2 - Atualizar o texto do computador
    pageCounter.textContent =
        `Pagina ${currentPageIndex + 1} de ${pages.length}`;

    // Passo 3 - Controlar o estados dos botões
    btnPrev.disabled = currentPageIndex === 0;
    btnNext.disabled = currentPageIndex === pages.length - 1;
}

// Passo 5 - Cliques no botão

// Botão Anterior
btnPrev.addEventListener("click", () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    }
});

//Botão Proximo
btnNext.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateReader();
    }
});

// Passo 6 - Suporte para navegação via teclas
document.addEventListener("keydown", (event) => {
    if(event.key === "ArrowLeft" && currentPageIndex > 0) {
        currentPageIndex--;
        updateReader();
    } else if (event.key === "ArrowRight" && currentPageIndex < pages.length -1)
        currentPageIndex++;
        updateReader();
})

updateReader();

