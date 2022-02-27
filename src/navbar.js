//Renders the navbar for the page
function renderNav() {
    const content = document.querySelector('#content');
    //Creating all of the header elements
    const header = document.createElement('div');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.innerHTML = `<img src="../assets/img/bobs-burgers.png" alt="Bob's Burger's Sign">`;
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const homeLink = document.createElement('button');
    homeLink.classList.add('home-link');
    const menuLink = document.createElement('button');
    menuLink.classList.add('menu-link');
    const contactLink = document.createElement('button');
    contactLink.classList.add('contact-link');

    homeLink.innerHTML = 'Home';
    menuLink.innerHTML = 'Menu';
    contactLink.innerHTML = 'Contact';

    //Appending header elements
    li1.appendChild(homeLink);
    li2.appendChild(menuLink);
    li3.appendChild(contactLink);
    ul.append(li1, li2, li3);
    navBar.appendChild(ul);
    header.append(imgContainer, navBar);
    content.appendChild(header);
}

export { renderNav };