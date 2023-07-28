'use strict';
import { lightTheme, darkTheme, themeBtnHandler } from './theme.js'

const themeBtnEl = document.querySelector('.theme-button');

const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

currentTheme && currentTheme === 'DARK'
  ? darkTheme(themeBtnEl)
  : lightTheme(themeBtnEl)

const timeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();

  currentTheme && hours > 17
    ? darkTheme(themeBtnEl)
    : lightTheme(themeBtnEl)
}

if (!currentTheme) {
  timeOfDay();
}

themeBtnEl.addEventListener('click', themeBtnHandler)