'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')
const greetingEl = document.querySelector('#greeting');
console.log(greetingEl);

setInterval(() => {
    const currentLocalTime = new Date().toLocaleTimeString();

    // show current time
    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
}, 1000)


const themeForDaytime = () => {
    // the user is saving the date object to a variable
    const date = new Date();
    // then pulling the hours from the date object
    const hours = date.getHours();

    // switch to night theme after 5pm
    if (hours > 17) {
        document.body.style.color = "silver";
        document.body.style.background = "var(--clr-maroon-overload-will-s-205)";
    }
}
themeForDaytime();

function setTheme() {
    // the user is saving the date object to a variable
    const date = new Date();
    // then pulling the hours from the date object
    const hours = date.getHours();

    // toggle theme of the webpage
    if (hours < 17 && document.getElementById("theme-button").textContent == "THEME") {
        document.body.style.color = "silver";
        document.body.style.background = "var(--clr-maroon-overload-will-s-205)"; //DARK
        document.getElementById("theme-button").textContent = "DARK"; //DARK
    } else if (hours > 17 && document.getElementById("theme-button").textContent == "THEME") {
        document.body.style.color = "var(--clr-paragraph)";
        document.body.style.background = "var(--clr-background-tint)"; // LIGHT
        document.getElementById("theme-button").textContent = "LIGHT"; // LIGHT
    } else if (document.getElementById("theme-button").textContent == "LIGHT") {
        document.body.style.color = "silver";
        document.body.style.background = "var(--clr-maroon-overload-will-s-205)"; //DARK
        document.getElementById("theme-button").textContent = "DARK"; //DARK
    } else if (document.getElementById("theme-button").textContent == "DARK") {
        document.body.style.color = "var(--clr-paragraph)";
        document.body.style.background = "var(--clr-background-tint)"; // LIGHT
        document.getElementById("theme-button").textContent = "LIGHT"; // LIGHT
    }

}
