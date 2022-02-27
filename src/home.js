function renderHome() {
    const content = document.querySelector('#content');
    const home = document.createElement('section');
    home.classList.add('page-tab', 'home-tab');
    const about = document.createElement('div');
    about.classList.add('about');
    const aboutTitle = document.createElement('h1');
    aboutTitle.innerText = 'About Us'
    const aboutBody = document.createElement('p');
    aboutBody.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus corrupti eveniet quo aperiam ullam repellat provident velit architecto vel quia repudiandae sequi omnis, obcaecati eos quos aliquid sint labore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloribus corrupti eveniet quo aperiam ullam repellat provident velit architecto vel quia repudiandae sequi omnis, obcaecati eos quos aliquid sint labore?';
    const aboutImgContainer = document.createElement('div');
    aboutImgContainer.classList.add('img-container');
    aboutImgContainer.innerHTML = `<img src="../assets/img/family.jpeg" alt="Bob's Burger's Staff">`;
    
    about.appendChild(aboutTitle);
    about.appendChild(aboutBody);
    home.appendChild(about);
    home.appendChild(aboutImgContainer);
    content.appendChild(home);
}

function showHome() {
    const home = document.querySelector('.home-tab');
    home.classList.remove('hidden');
    const homeLink = document.querySelector('.home-link');
    homeLink.classList.add('selected');
}

function hideHome() {
    const home = document.querySelector('.home-tab');
    home.classList.add('hidden');
    const homeLink = document.querySelector('.home-link');
    homeLink.classList.remove('selected');
}

export { renderHome, showHome, hideHome };