var session = null;

function init() {
	setBackKeyListener();
	//showWelcomeScreen();
}

function getNewSession() {
	var session = {
		sit: 0,
		stay: 0,
		down: 0,
		come: 0,
		heel: 0
	};
	return session;
}

$(document).ready(init);