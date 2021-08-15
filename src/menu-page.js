function showMenuPage(e){
    //color Menu button
    //uncolor others
    let buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => button.classList.remove('pressed-button'));
    e.target.classList.add('pressed-button');
    //render a page
    let page = document.querySelector('.page');
    page.textContent = '';
    //creating menu items
    let margherita = document.createElement('div');
    let fourSeasons = document.createElement('div');
    let carbonara = document.createElement('div');
    let quatroFormaggi = document.createElement('div');
    let hawaiian = document.createElement('div');
    let pizzas = [margherita, fourSeasons, carbonara, quatroFormaggi, hawaiian];
    pizzas.forEach(pizza => pizza.classList.add('chunk'));
    pizzas.forEach(pizza => pizza.classList.add('pizza'));
    /*
        <div class='chunk'>
            <h1>Margherita</h1>
            <img src="./margherita.jpg">
            <h2>35$</h2>
        </div>
    */
    let title = document.createElement('h1');
    let img = document.createElement('img');
    let price = document.createElement('h2');

    createPizza(margherita, 'Margherita', '35$');
    createPizza(fourSeasons, 'Four Seasons', '50$');
    createPizza(carbonara, 'Carbonara', '45$');
    createPizza(quatroFormaggi, 'Quatro Formaggi', '55$');
    createPizza(hawaiian, 'Hawaiian', '60$');


    // TODO: add headers
    // TODO: add photos
    // TODO: add price
    pizzas.forEach(pizza => page.appendChild(pizza));
}

function createPizza(pizza, title, price){
    let titleElement = document.createElement('h1');
    let priceElement = document.createElement('h2');
    titleElement.textContent = title;
    priceElement.textContent = price;
    pizza.appendChild(titleElement);
    pizza.appendChild(priceElement);
}

export default showMenuPage;