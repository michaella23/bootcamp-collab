'use strict';
import { lightTheme, darkTheme, themeBtnHandler, timeOfDay } from './theme.js'

// const themeBtnEl = document.querySelector('.theme-button');
const themeSwitch = document.querySelectorAll('#theme-switch');
const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

if (currentTheme) {
  currentTheme === 'DARK'
    ? darkTheme(themeSwitch)
    : lightTheme(themeSwitch)
} else {
  timeOfDay(themeSwitch);
}

// Watches both buttons for a click event
const themeSwitchArray = Array.from(themeSwitch)

themeSwitchArray.map(theme => {
  theme.addEventListener('click', () => {
    themeBtnHandler(themeSwitch)
  })
})