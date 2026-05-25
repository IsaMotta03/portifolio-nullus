// /* ── cursor bonitinho ── */
// const cursorP = document.getElementById('ponteiro-cursor');
// const cursorA = document.getElementById('anel-cursor');

// let mouseX = 0, mouseY = 0, anelX = 0, anelY = 0;

// if (window.matchMedia('(pointer: fine)').matches && cursorP && cursorA) {
//   document.body.classList.add('custom-cursor-active');
//   cursorP.style.display = 'block';
//   cursorA.style.display = 'block';

//   document.addEventListener('mousemove', e => {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
//     cursorP.style.left = mouseX + 'px';
//     cursorP.style.top  = mouseY + 'px';
//   });

//   requestAnimationFrame(function sincronizaAnel() {
//     anelX += (mouseX - anelX) * 0.12;
//     anelY += (mouseY - anelY) * 0.12;
//     cursorA.style.left = anelX + 'px';
//     cursorA.style.top  = anelY + 'px';
//     requestAnimationFrame(sincronizaAnel);
//   });

//   document.querySelectorAll('a, button, select').forEach(el => {
//     el.addEventListener('mouseenter', () => {
//       cursorP.style.transform = 'translate(-50%, -50%) scale(2.5)';
//       cursorA.style.transform = 'translate(-50%, -50%) scale(1.4)';
//       cursorA.style.opacity   = '0.3';
//     });
//     el.addEventListener('mouseleave', () => {
//       cursorP.style.transform = 'translate(-50%, -50%) scale(1)';
//       cursorA.style.transform = 'translate(-50%, -50%) scale(1)';
//       cursorA.style.opacity   = '0.5';
//     });
//   });
// }

/* ── Efeito Scroll (menu/nabbar)── */
const cabecalho = document.querySelector('.cabecalho-site');
window.addEventListener('scroll', () => {
  if (cabecalho) {
    cabecalho.classList.toggle('scrolled', window.scrollY > 50);
  }
});

/* ── canvas de partículas (não espero que ninguem entenda mexi tanto nisso que nem eu entendo mais) ── */
// const canvasElem = document.getElementById('tela-particulas');
// if (canvasElem) {
//   const ctx = canvasElem.getContext('2d');
//   let largura, altura;

//   function redimensionar() {
//     largura = canvasElem.width  = window.innerWidth;
//     altura  = canvasElem.height = window.innerHeight;
//   }
//   redimensionar();
//   window.addEventListener('resize', redimensionar);

//   class ParticulaEstelar {
//     constructor() { 
//       this.renovar(); 
//     }
    
//     renovar() {
//       this.x = Math.random() * largura;
//       this.y = Math.random() * altura;
//       this.vy = -(Math.random() * 0.12 + 0.04);
//       /* Leve dispersão horizontal para movimento orgânico */
//       this.vx = (Math.random() * 0.08 - 0.04); 
//       this.tamanho = Math.random() * 1.3 + 0.6;
//       this.alfa = Math.random() * 0.45 + 0.15;
//     }
    
//     atualizar() {
//       this.y += this.vy;
//       this.x += this.vx;
//       /* Se sair da tela por cima ou pelas laterais, reseta na base */
//       if (this.y < -10 || this.x < -10 || this.x > largura + 10) {
//         this.renovar();
//         this.y = altura + 10; 
//       }
//     }
    
//     renderizar() {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, this.tamanho, 0, Math.PI * 2);
//       ctx.fillStyle = `rgba(168, 85, 247, ${this.alfa})`;
//       ctx.fill();
//     }
//   }

//   /* array contendo 80 partículas  */
//   const nuvemParticulas = Array.from({ length: 80 }, () => new ParticulaEstelar());

//   /* função de Loop */
//   function rodarCiclo() {
//     ctx.clearRect(0, 0, largura, altura);
//     nuvemParticulas.forEach(p => { 
//       p.atualizar(); 
//       p.renderizar(); 
//     });
//     requestAnimationFrame(rodarCiclo);
//   }
  
//   /* Inicialização do ciclo de renderização */
//   rodarCiclo();
// }

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

/* Validação do formulário*/

const formulario = document.getElementById("form-contato-web");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", (event) => {

  event.preventDefault();

  if (nome.value === "") {
    alert("Preencha o nome");
  }

  if (email.value === "") {
    alert("Preencha o email");
  }

  if (mensagem.value === "") {
    alert("Preencha a mensagem");
  }

});