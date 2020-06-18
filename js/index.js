let button = document.getElementById('button');
const menu = document.getElementById('menu')
console.log(menu)
button.addEventListener('click', hamburgerMenu);

function hamburgerMenu() {
    if ( menu.className == 'header__ul') {
        menu.className += ' header__ul-active'
    } else {
        menu.className = 'header__ul'
    }
};