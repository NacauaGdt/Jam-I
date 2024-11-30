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