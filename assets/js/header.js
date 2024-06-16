/* Hamburger Menu */

const menuBtn = document.getElementById('menubutton');
const menu = document.getElementById('primary-menu');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menu.removeAttribute('hidden');
    menuBtn.setAttribute('aria-expanded', true);
}

function closeMenu() {
    menu.setAttribute('hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
}

window.addEventListener('click', function(e) {
            if (menu.contains(e.target) || menuBtn.contains(e.target)) {
                console.log('click inside menu');
             } else {
                console.log('click outside menu');
                closeMenu();
            }
        } 
);