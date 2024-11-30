// Seleciona as imagens e as setas
const imagens = document.querySelectorAll(".foto");
const setas = document.querySelectorAll(".seta");

let indiceAtual = 0; // Índice da imagem atualmente visível

// Função para atualizar a imagem visível
function atualizarImagem() {
  // Esconde todas as imagens
  imagens.forEach(foto => foto.classList.remove("aberta"));
  // Mostra apenas a imagem correspondente ao índice atual
  imagens[indiceAtual].classList.add("aberta");
}

// Adiciona evento de clique a cada seta
setas.forEach(seta => {
  seta.addEventListener("click", () => {
    if (seta.classList.contains("seta-right")) {
      // Avança para a próxima imagem
      indiceAtual = (indiceAtual + 1) % imagens.length;
    } else if (seta.classList.contains("seta-left")) {
      // Volta para a imagem anterior
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    }
    atualizarImagem(); // Atualiza a imagem visível
  });
});


// Seleciona todos os links do menu
const abas = document.querySelectorAll(".aba");

// Adiciona o evento de clique a cada link
abas.forEach(aba => {
  aba.addEventListener("click", () => {
    // Remove a classe ativa de todos os links
    abas.forEach(item => item.classList.remove("ativa"));

    // Adiciona a classe ativa ao link clicado
    aba.classList.add("ativa");
  });
});


//TEMPO DE CARREGAMENTO ENTRE AS PÁGINAS

// Seleciona todos os links
const links = document.querySelectorAll('a');

// Seleciona o spinner
const loading = document.getElementById('loading');

// Adiciona um evento de clique para cada link
links.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (href && href !== "#") {
      event.preventDefault(); // Impede o carregamento imediato

      // Mostra o spinner
      loading.classList.add('active');

      // Redireciona após 500ms (ajustável)
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    }
  });
});
