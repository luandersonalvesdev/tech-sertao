window.addEventListener('scroll', () => {
  const headerEl = document.querySelector('header');
  headerEl.classList.toggle('page-down', window.scrollY > 0)
})
