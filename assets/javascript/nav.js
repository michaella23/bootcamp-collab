// When menu button is clicked, the main container and side menu will shift to the right
const menuButtonEl = document.querySelector('.menu-button');
const mainContainerEl = document.querySelector('.main-container');
const sideMenuEl = document.querySelector('.side-nav');

menuButtonEl.addEventListener('click', function () {
    mainContainerEl.classList.toggle('shift');
    sideMenuEl.classList.toggle('shift');
});