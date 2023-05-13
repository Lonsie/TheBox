const burger = document.querySelector('.burger-button');
const navMenu = document.querySelector('.nav-list');

burger.addEventListener("click", () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
})