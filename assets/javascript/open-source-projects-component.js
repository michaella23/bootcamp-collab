'use strict';
import { openSourceProjects } from './open-source-projects.js'
import { lightTheme, darkTheme, themeBtnHandler, timeOfDay } from './theme.js'

// const themeBtnEl = document.querySelector('.theme-button');
const themeSwitch = document.getElementById('theme-switch');
const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

if (currentTheme) {
  currentTheme === 'DARK'
    ? darkTheme(themeSwitch)
    : lightTheme(themeSwitch)
} else {
  timeOfDay(themeSwitch);
}

themeSwitch.addEventListener('click', () => {
  themeBtnHandler(themeSwitch)
})


const openSourceProjectsListEl = document.getElementById('open-source-projects-list-el')

const openSourceProjectsListHTML = openSourceProjects.map(({name, description, githubURL, liveURL}) => {
  return `
    <li>
     <h2 class="project-list-item-header"><a href="${githubURL}" target="_blank">${name}</a></h2> 
     <p>${description}</p>
     <p>Visit the <a href="${githubURL}" target="_blank">GitHub repository here</a> and 
     <a href="${liveURL}" target="_blank">their website here.</a></p>
    </li>
  `
}).join('')

openSourceProjectsListEl.innerHTML = openSourceProjectsListHTML
