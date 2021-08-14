function showContactPage(e){
    //color Contact button
    //uncolor others
    let buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => button.classList.remove('pressed-button'));
    e.target.classList.add('pressed-button');
    //render a page
    let page = document.querySelector('.page');
    page.textContent = '';
}

export default showContactPage;