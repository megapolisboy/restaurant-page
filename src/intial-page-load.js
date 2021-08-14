function initialPageLoad(content){
    let title = document.createElement('h1');
    title.textContent = "Pizzeria";
    title.classList.add("title");
    let toolbar = document.createElement('div');
    toolbar.classList.add('toolbar');
    let homeButton = document.createElement('button');
    let menuButton = document.createElement('button');
    let contactButton = document.createElement('button');
    homeButton.classList.add('page-button');
    menuButton.classList.add('page-button');
    contactButton.classList.add('page-button');
    //adding textContent to buttons
    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contacts';
    //set ids to buttons
    homeButton.setAttribute('id', 'home-button');
    menuButton.setAttribute('id', 'menu-button');
    contactButton.setAttribute('id', 'contact-button');
    toolbar.appendChild(homeButton);
    toolbar.appendChild(menuButton);
    toolbar.appendChild(contactButton);

    let page = document.createElement('div');
    page.textContent = 'Welcome to the Pizzeria! Wanna have a tasty pizza? Cool! Order right now! ' +
    'Home for description and working hours and location, Menu for seeing what is available and Contact ' +
    'for learning how to reach us!';
    page.classList.add('page');
    content.appendChild(title);
    content.appendChild(toolbar);
    content.appendChild(page);
}

export default initialPageLoad;