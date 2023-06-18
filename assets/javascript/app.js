'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')
const greetingEl = document.querySelector('#greeting');
console.log(greetingEl);

setInterval(() => {
    const currentLocalTime = new Date().toLocaleTimeString();
    // the user is saving the date object to a variable
	const date = new Date();
    // then pulling the hours from the date object
    const hours = date.getHours();
    
    /* 
        user is declaring an undefined variable outside
        the scope of the control structure / if statement 
        below and then setting the value depending on
        the hours.
    */
	let timeOfDay;
    let timeOfDayEmote;

	if (hours < 12) {
        timeOfDay = "morning";
        timeOfDayEmote = '🌄';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon";
        timeOfDayEmote = '🌅';
    } else {
        timeOfDay = "night";
        timeOfDayEmote = '🌆';
        document.body.style.color = "silver";
        document.body.style.background = "var(--clr-maroon-overload-will-s-205)";
    }

    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
    greetingEl.textContent = `Good ${timeOfDay} ${timeOfDayEmote} bootcamp students!`
}, 1000)

function setTheme() {
    const hours = new Date().getHours();
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