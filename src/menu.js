function renderMenu() {
    const content = document.querySelector('#content');
    const menu = document.createElement('section');
    menu.classList.add('page-tab', 'menu-tab');
    const menuTitle = document.createElement('h1');
    menuTitle.innerText = "Menu";
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    const hamburger = makeMenuItem('Hamburger', 3.50, "A plain hamburger with pickles, onion, tomatoes, lettuce, and ketchup.", "https://www.inspiredtaste.net/wp-content/uploads/2016/08/Easy-Homemade-Hamburger-Recipe-2-1200.jpg")
    hamburger.classList.add('hamburger');

    const cheeseburger = makeMenuItem('Cheeseburger', 4.00, "A cheeseburger with pickles, onion, tomatoes, lettuce, and ketchup.", "https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg")
    cheeseburger.classList.add('cheeseburger');

    const baconCheeseburger = makeMenuItem('Bacon Cheeseburger', 4.75, "A cheeseburger with maple bacon, pickles, onion, tomatoes, lettuce, and ketchup.", "https://simply-delicious-food.com/wp-content/uploads/2015/07/Bacon-and-cheese-burgers-3-480x270.jpg")
    baconCheeseburger.classList.add('bacon-cheeseburger');

    const veggieBurger = makeMenuItem('Veggie Burger', 4.50, "A blackbean veggie burger with pickles, onion, tomatoes, spinach, and veggienaise.", "https://i.ytimg.com/vi/a19EY3YNStA/maxresdefault.jpg")
    veggieBurger.classList.add('veggie-burger');

    const fries = makeMenuItem('French Fries', 2.50, "Lightly salted french fries", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpHJHN1zDgCZNBz058FfF-eECHInpXogSGA&usqp=CAU")
    fries.classList.add('fries');

    const drink = makeMenuItem('Drink', 1.50, "Your choice of soda, juice, or water", "https://s3.envato.com/files/143203357/Preview%20Image%20Set/04.jpg")
    drink.classList.add('drink');

    menuGrid.append(hamburger, cheeseburger, baconCheeseburger, veggieBurger, fries, drink);
    menu.append(menuTitle, menuGrid);
    content.appendChild(menu);
}

function makeMenuItem (name, price, description, imgURL) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    const itemName =  document.createElement('h2');
    itemName.innerText = name;
    const itemPrice = document.createElement('span');
    itemPrice.innerText = `$${price}`;
    const itemDescription = document.createElement('p');
    itemDescription.innerText = description;
    const itemImg = document.createElement('div');
    itemImg.innerHTML = `<img src="${imgURL}" alt="${name}">`;

    menuItem.append(itemName, itemPrice, itemDescription, itemImg);

    return menuItem;
}

function showMenu() {
    const menu = document.querySelector('.menu-tab');
    menu.classList.remove('hidden');
    const menuLink = document.querySelector('.menu-link');
    menuLink.classList.add('selected');
}

function hideMenu() {
    const menu = document.querySelector('.menu-tab');
    menu.classList.add('hidden');
    const menuLink = document.querySelector('.menu-link');
    menuLink.classList.remove('selected');
}

export { renderMenu, showMenu, hideMenu };