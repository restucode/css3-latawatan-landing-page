var newMenuSwiper = new Swiper('.s-c-destination', {
 slidesPerView: 'auto',
 spaceBetween: 30,
 pagination: {
  el: '.swiper-pagination-2',
  clickable:true
 },
});



const nav = document.querySelector("#nav");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuDrop = document.querySelector(".menu-drop");
const toTop = document.querySelector('.to-top')

burger.addEventListener("click", () => {
 menu.classList.toggle('menu-effect');
})


window.addEventListener('scroll', () => {
 nav.classList.toggle('active', window.scrollY > 0)

  if(window.pageYOffset > 300) {
  toTop.classList.add('active')
 } else {
  toTop.classList.remove('active')
 }
})


let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  nav.classList.remove('hide') 
 } else {
  nav.classList.add('hide')
 }
 prevScrollpos = currentScrollPos;
})


toTop.addEventListener('click', () => {
 window.scrollTo(0, 0);
})