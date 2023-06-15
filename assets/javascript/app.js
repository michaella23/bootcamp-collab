'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')

setInterval(() => {
	const currentLocalTime = new Date().toLocaleTimeString()
	const date = new Date()
    const hours = date.getHours()
	let timeOfDay
	if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
	currentLocalTimeEl.textContent = `Current Local Time: ${currentLocalTime} - Good ${timeOfDay}!`
}, 1000)
