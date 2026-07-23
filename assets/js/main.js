document.querySelectorAll('[data-checklist]').forEach((list) => {
  const inputs = list.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((input) => input.addEventListener('change', () => {
    list.dataset.complete = [...inputs].every((item) => item.checked) ? 'true' : 'false';
  }));
});

// Vite задаёт BASE_URL с именем репозитория при публикации на GitHub Pages.
// Так корневые ссылки остаются рабочими и локально, и на опубликованном сайте.
const basePath = import.meta.env.BASE_URL;
document.querySelectorAll('a[href^="/"]').forEach((link) => {
  const path = link.getAttribute('href').slice(1);
  link.setAttribute('href', `${basePath}${path}`);
});
