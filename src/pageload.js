import { renderNav } from './navbar.js';
import { renderHome, showHome} from './home.js';
import { renderMenu, hideMenu } from './menu.js';
import { renderContact, hideContact } from './contact.js';

function pageLoad() {
    renderNav();
    renderHome();
    renderMenu();
    renderContact();
    showHome();
    hideMenu();
    hideContact();
}

export { pageLoad };