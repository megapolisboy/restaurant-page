function showHomePage(e){
    //color Home button
    //uncolor others
    let buttons = document.querySelectorAll('.page-button');
    buttons.forEach(button => button.classList.remove('pressed-button'));
    e.target.classList.add('pressed-button');
    //render a page
    let page = document.querySelector('.page');
    page.textContent = '';
    let description = document.createElement('div');
    let workingHours = document.createElement('div');
    let location = document.createElement('div');
    description.classList.add('chunk');
    workingHours.classList.add('chunk');
    location.classList.add('chunk');
    description.textContent = `Pizza baked on fire... Sounds awesome, isn't it? We think so as well,
    and that's why we invite everyone to taste best pizza you've even eaten. Just head for the menu,
    choose the one you fancy and enjoy!`;
    workingHours.textContent = `We're working 24/7!!!`;
    location.textContent = `Our Pizzeria is entirely online! Just order a pizza by phone or via the
     website! What can be simpler?`;
    page.appendChild(description);
    page.appendChild(workingHours);
    page.appendChild(location);
}

export default showHomePage;