'use strict';
import { lightTheme, darkTheme, themeBtnHandler } from './theme.js'

const themeBtnEl = document.querySelector('.theme-button');
const currentLocalTimeEl = document.getElementById('current-local-time');
const greetingEl = document.querySelector('#greeting');

setInterval(() => {
    const currentLocalTime = new Date().toLocaleTimeString();
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    let timeOfDayEmote;

    if (hours < 12) {
        timeOfDay = "morning"
        timeOfDayEmote = '🌄';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        timeOfDayEmote = '🌅';
    } else {
        timeOfDay = "night"
        timeOfDayEmote = '🌆';
    }
    // show current time
    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
    greetingEl.textContent = `Good ${timeOfDay} ${timeOfDayEmote} bootcamp students!`
}, 1000)

const currentTheme = JSON.parse(localStorage.getItem('currentTheme'));
console.log(currentTheme)
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


