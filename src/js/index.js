const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".divfundo");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        
        desselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarPersonagem();

        personagens[index].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const divfundoSelecionado = document.querySelector(".divfundo.selecionado");
    divfundoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
