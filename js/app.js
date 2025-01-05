import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
let sliders = document.querySelector(".slider");
const swiper = new Swiper(sliders, {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let buyers = document.querySelector(".buyers-swiper");
const viewswiper = new Swiper(buyers, {
  pagination: {
    el: ".buyers-pagination",
    dynamicBullets: true,
  },
});
