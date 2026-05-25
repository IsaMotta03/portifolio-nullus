/* ── Efeito Scroll (menu/nabbar)── */
const cabecalho = document.querySelector('.cabecalho-site');
window.addEventListener('scroll', () => {
  if (cabecalho) {
    cabecalho.classList.toggle('scrolled', window.scrollY > 50);
  }
});

/* ── Menu Hamburguer Mobile Funcional ── */
const botao = document.getElementById("botao-hamburguer");
const menu = document.getElementById("menu-mobile");

botao.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    menu.style.position = "fixed";
  }
});

/* ── Validação do formulário (Simplificada) ── */
const formulario = document.getElementById("form-contato-web");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

if (formulario) {
  formulario.addEventListener("submit", (event) => {

    // Checa um campo por vez. Se achar erro, trava o envio e avisa via alert.
    if (nome.value === "") {
      event.preventDefault(); 
      alert("Preencha o nome");
    } 
    else if (email.value === "") {
      event.preventDefault();
      alert("Preencha o email");
    } 
    else if (mensagem.value === "") {
      event.preventDefault();
      alert("Preencha a mensagem");
    } 
    else {
      // Se passar por tudo sem erro, cai aqui!
      event.preventDefault(); // Mantemos isso só para a página não recarregar durante a sua apresentação
      alert("Mensagem enviada com sucesso!");
    }

  });
}