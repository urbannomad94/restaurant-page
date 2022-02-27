import './styles.css';
import { pageLoad } from './pageload.js';
import { hideMenu, showMenu } from './menu.js';
import { hideHome, showHome } from './home.js';
import { hideContact, showContact } from './contact';

pageLoad();

const homeLink = document.querySelector('.home-link');
homeLink.addEventListener('click', () => {
    showHome();
    hideMenu();
    hideContact();
});

const menuLink = document.querySelector('.menu-link');
menuLink.addEventListener('click', () => {
    showMenu();
    hideHome();
    hideContact();
});

const contactLink = document.querySelector('.contact-link');
contactLink.addEventListener('click', () => {
    showContact();
    hideHome();
    hideMenu();
});
