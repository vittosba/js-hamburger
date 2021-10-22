const open = document.querySelector('.header-right > a');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');

open.addEventListener('click',
    function() {
        hamburgerMenu.classList.add('active');
    }
)

close.addEventListener('click',
    function() {
        hamburgerMenu.classList.remove('active');
    }
)
