const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('.header');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon_active');
  header.classList.toggle('header_mobile');
  document.body.classList.toggle('no-scroll');
  header.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 532) {
    menuIcon.classList.remove('menu-icon_active');
    header.classList.remove('header_mobile');
    document.body.classList.remove('no-scroll');
  }
})