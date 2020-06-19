let mediaQuerie = window.matchMedia('screen and (max-width: 500px)');
let button = document.getElementById('menu-button');
const menu = document.getElementById('menu');

changeScreenSize(mediaQuerie);
mediaQuerie.addListener(changeScreenSize);

function changeScreenSize(changeQuerie) {
    if (changeQuerie.matches) {
        button.addEventListener('click', hamburgerMenu);
    } else {
        button.removeEventListener('click', hamburgerMenu);
    }
}

function hamburgerMenu() {
    if ( menu.className == 'header__ul') {
        menu.className += ' header__ul-active';
    } else {
        menu.className = 'header__ul';
    }
};