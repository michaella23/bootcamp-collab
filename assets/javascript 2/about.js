'use strict';
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
