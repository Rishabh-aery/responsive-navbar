const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
console.log();


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

})