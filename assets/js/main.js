document.querySelectorAll('[data-checklist]').forEach((list) => {
  const inputs = list.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((input) => input.addEventListener('change', () => {
    list.dataset.complete = [...inputs].every((item) => item.checked) ? 'true' : 'false';
  }));
});

// Страницы уроков используют тот же формат ссылок, что и основная навигация.
document.querySelectorAll('a.brand[href="../index.html"]').forEach((link) => {
  link.setAttribute('href', '/');
});
document.querySelectorAll('a[href="../index.html"], a[href="../index.html#program"]').forEach((link) => {
  if (!link.classList.contains('brand')) link.setAttribute('href', '/#program');
});
