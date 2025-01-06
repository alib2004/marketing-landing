import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
let sliders = document.querySelector(".slider");
const swiper = new Swiper(sliders, {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let opennavbar = document.querySelector('.navbar-icon-div')
let closenavbar = document.querySelector('.close-btn')
let navbarmobile = document.querySelector('.navbar-mobile')
opennavbar.addEventListener('click',()=>{
  navbarmobile.classList.add('open-nav')
})
closenavbar.addEventListener('click',()=>{
  navbarmobile.classList.remove('open-nav')
})