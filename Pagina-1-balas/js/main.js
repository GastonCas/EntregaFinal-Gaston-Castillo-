const botonMenu = document.querySelector('#botonMenu'),
navigationMenu = document.querySelector('#navigationMenu'),
botonSearch = document.querySelector('#search');

botonMenu.addEventListener('click', showMainMenu, false);

function showMainMenu() {
    let navigationClass = 'navigation-menu_is-show';
    navigationMenu.classList.toggle(navigationClass);
    if(navigationMenu.classList.contains(navigationClass)){
        botonMenu.textContent = 'close'
    }else{
        botonMenu.textContent = 'menu'
    }
}
