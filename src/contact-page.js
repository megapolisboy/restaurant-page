function showContactPage(e){
    //color Contact button
    //uncolor others
    let buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => button.classList.remove('pressed-button'));
    e.target.classList.add('pressed-button');
    //render a page
    let page = document.querySelector('.page');
    page.textContent = '';

    let workers = document.createElement('div');
    let phoneNumber = document.createElement('div');
    let email = document.createElement('div');
    workers.classList.add('chunk');
    phoneNumber.classList.add('chunk');
    email.classList.add('chunk');

    let staff = `3 cooks, 2 waiters, 1 manager, 1 cleaner`;
    createContact(workers, 'Meet our staff', staff);
    createContact(phoneNumber, 'Call us!', `We are a non-existent Pizzeria, so the number doesn't exist
    either:)`);
    createContact(email, 'Drop us a line!', `nonexistentemail@pizza.com`);

    page.appendChild(workers);
    page.appendChild(phoneNumber);
    page.appendChild(email);

}

function createContact(contact, title, text){
    let titleElement = document.createElement('h1');
    let textElement = document.createElement('h4');
    titleElement.textContent = title;
    textElement.textContent = text;
    contact.appendChild(titleElement);
    contact.appendChild(textElement);
}

export default showContactPage;