window.addEventListener('load', () => {
    const preloader = document.getElementById('sj-preloader');
    preloader.classList.add('hide');
    setTimeout(() => preloader.remove(), 600); // Remove from DOM
  });