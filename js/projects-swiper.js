
const swiper = new Swiper(".mySwiper", {

slidesPerView: 3,

grid: {
rows: 2,
},

spaceBetween: 32,

pagination: {
el: ".swiper-pagination",
clickable: true,
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});