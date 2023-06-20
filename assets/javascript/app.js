'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')
const greetingEl = document.querySelector('#greeting');
console.log(greetingEl);

setInterval(() => {
    const currentLocalTime = new Date().toLocaleTimeString();

    // show current time
    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
}, 1000)


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
    document.getElementById("theme-button").textContent = "DARK";
}

const lightTheme = () => {
    document.body.style.color = "var(--clr-paragraph)";
    document.body.style.background = "var(--clr-background-tint)";
    document.getElementById("theme-button").textContent = "LIGHT";
}

function setTheme() {
    // the user is saving the date object to a variable
    const date = new Date();
    // then pulling the hours from the date object
    const hours = date.getHours();

    // toggle theme of the webpage
    if (hours < 17 && document.getElementById("theme-button").textContent == "THEME") {
        darkTheme()
    } else if (hours > 17 && document.getElementById("theme-button").textContent == "THEME") {
        lightTheme()
    } else if (document.getElementById("theme-button").textContent == "LIGHT") {
        darkTheme()
    } else if (document.getElementById("theme-button").textContent == "DARK") {
        lightTheme()
    }

}
