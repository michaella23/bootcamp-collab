'use strict';

const themeLnkEl = document.querySelector('.link-color');
const themeLnkEl2 = document.querySelector('.done-by--link');
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

const darkTheme = () => {
    document.body.style.color = "silver";
    document.body.style.background = "var(--clr-maroon-overload-will-s-205)";
    themeBtnEl.textContent = "DARK";
    themeLnkEl.style.color="var(--clr-terracotta)";
    themeLnkEl2.style.color="var(--clr-terracotta)";
}

const lightTheme = () => {
    document.body.style.color = "var(--clr-paragraph)";
    document.body.style.background = "var(--clr-background-tint)";
    themeBtnEl.textContent = "LIGHT";
    themeLnkEl.style.color="var(--clr-paragraph)";
    themeLnkEl2.style.color="var(--clr-paragraph)";
}

const timeOfDay = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours > 17) {
        darkTheme()
    } else {
        lightTheme()
    }
}
timeOfDay();

themeBtnEl.addEventListener('click', function () {
    const toggleIs = themeBtnEl.textContent;
    // the user is saving the date object to a variable
    const date = new Date();
    // then pulling the hours from the date object
    const hours = date.getHours();

    // toggle theme of the webpage
     if (toggleIs == "DARK") {
        lightTheme()
    } else {
        darkTheme()
    }
})
