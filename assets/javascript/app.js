'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')
const greetingEl = document.querySelector('#greeting');

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
        /*
            I stopped the change of colors until contrast is fixed
            made it difficult to work with during the night
        */
        // document.body.style.color = "silver";
        // document.body.style.background = "var(--clr-maroon-overload-will-s-205)";
    }

    currentLocalTimeEl.textContent = `Local Time: ${currentLocalTime}`;
    greetingEl.textContent = `Good ${timeOfDay} ${timeOfDayEmote} bootcamp students!`
}, 1000)