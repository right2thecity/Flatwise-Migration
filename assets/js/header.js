/* Hamburger Menu */

const menuBtn = document.getElementById('menubutton');
const menu = document.getElementById('primary-menu');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menu.toggleAttribute('hidden');
    if (menuBtn.getAttribute('aria-expanded') === 'true') {
        menuBtn.setAttribute('aria-expanded', 'false');
    } else {
        menuBtn.setAttribute('aria-expanded', 'true');
    }
}

function closeMenu() {
    menu.setAttribute('hidden', true);
    menuBtn.setAttribute('aria-expanded', false);
}

window.addEventListener('click', function(e) {
            if (menu.contains(e.target) || menuBtn.contains(e.target)) {
             } else {
                closeMenu();
            }
        } 
);


const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
    if (dropdownContent.getAttribute('aria-expanded') === 'true') {
        dropdownContent.setAttribute('aria-expanded', 'false');
    } else {
        dropdownContent.setAttribute('aria-expanded', 'true');
    }
    
  });

document.addEventListener('click', function(event) {
    if (!event.target.closest('.LangNav')) {
      closeAllDropdowns();
    }
  });


// Function to close all dropdowns by removing the 'show' class
function closeAllDropdowns() {
  dropdownContent.classList.remove('show');
}