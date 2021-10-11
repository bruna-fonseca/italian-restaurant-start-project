const burguerIcon = document.querySelector('#burger');
const navBarMenu = document.querySelector('#nav-links');

burguerIcon.addEventListener('click', () => {
  navBarMenu.classList.toggle('is-active');
});