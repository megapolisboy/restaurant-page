import initialPageLoad from './intial-page-load';
import showHomePage from './home-page';
import showContactPage from './contact-page';
import showMenuPage from './menu-page';

let content = document.querySelector('#content');
initialPageLoad(content);

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

homeButton.addEventListener('click', showHomePage);
menuButton.addEventListener('click', showMenuPage);
contactButton.addEventListener('click', showContactPage);