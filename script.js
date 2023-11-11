// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


/* For Open Navbar*/ 
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

/* For Close Navbar*/ 
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}