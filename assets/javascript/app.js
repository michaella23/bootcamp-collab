'use strict';

const themeBtnEl = document.querySelector('.theme-button');
const currentLocalTimeEl = document.getElementById('current-local-time');
const greetingEl = document.querySelector('#greeting');

/*
    Please leave this code below here, as you will see
    it adds to the original idea by placing the greeting
    within the hero. You can alter it but please keep the
    same functionality as it is currently
*/
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


/*
    This function below needs to be reworked, you placed 
    a onclick function when its better to keep your js
    separate from your HTML.

    Also the method of keeping track of the theme was a bit confusing, 
    every the function it grabs the same element from the DOM, very easily
    can achieve the same desired output with a variable and not need
    to write document.getElementById("theme-button").textContent == "THEME") 
    every time.

    If you want further help, reach out to me ( awcoetzer ) and we 
    can work on this together, but for now I am just commenting it out until
    fixed.
*/

// function setTheme() {
//     // the user is saving the date object to a variable
//     const date = new Date();
//     // then pulling the hours from the date object
//     const hours = date.getHours();

//     // toggle theme of the webpage
//     if (hours < 17 && document.getElementById("theme-button").textContent == "THEME") {
//         document.body.style.color = "silver";
//         document.body.style.background = "var(--clr-maroon-overload-will-s-205)"; //DARK
//         document.getElementById("theme-button").textContent = "DARK"; //DARK
//     } else if (hours > 17 && document.getElementById("theme-button").textContent == "THEME") {
//         document.body.style.color = "var(--clr-paragraph)";
//         document.body.style.background = "var(--clr-background-tint)"; // LIGHT
//         document.getElementById("theme-button").textContent = "LIGHT"; // LIGHT
//     } else if (document.getElementById("theme-button").textContent == "LIGHT") {
//         document.body.style.color = "silver";
//         document.body.style.background = "var(--clr-maroon-overload-will-s-205)"; //DARK
//         document.getElementById("theme-button").textContent = "DARK"; //DARK
//     } else if (document.getElementById("theme-button").textContent == "DARK") {
//         document.body.style.color = "var(--clr-paragraph)";
//         document.body.style.background = "var(--clr-background-tint)"; // LIGHT
//         document.getElementById("theme-button").textContent = "LIGHT"; // LIGHT
//     }
// }


// themeBtnEl.addEventListener('click', function () {
//     setTheme();
// })