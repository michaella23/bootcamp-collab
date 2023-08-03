'use strict';
import { lightTheme, darkTheme, themeBtnHandler, timeOfDay } from './theme.js'

const themeBtnEl = document.querySelector('.theme-button');
const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

if (currentTheme) {
  currentTheme === 'DARK'
    ? darkTheme(themeBtnEl)
    : lightTheme(themeBtnEl)
} else {
  timeOfDay(themeBtnEl);
}

themeBtnEl.addEventListener('click', () => {
  themeBtnHandler(themeBtnEl)
})