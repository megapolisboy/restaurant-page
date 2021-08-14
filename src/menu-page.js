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
}

export default showMenuPage;