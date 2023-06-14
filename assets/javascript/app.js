'use strict';

const currentLocalTimeEl = document.getElementById('current-local-time')

setInterval(() => {
	const currentLocalTime = new Date().toLocaleTimeString()
	currentLocalTimeEl.textContent = `Current Local Time: ${currentLocalTime}`
}, 1000)
