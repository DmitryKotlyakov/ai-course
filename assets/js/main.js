document.querySelectorAll('[data-checklist]').forEach((list) => {
  const inputs = list.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((input) => input.addEventListener('change', () => {
    list.dataset.complete = [...inputs].every((item) => item.checked) ? 'true' : 'false';
  }));
});
