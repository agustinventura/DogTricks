var session = null;
var ExercisesEnum = {
		SIT: "SIT",
		STAY: "STAY",
		DOWN: "DOWN",
		COME: "COME",
		HEEL: "HELL",
		properties: {
			SIT: {code: "sit", next: "STAY", previous: "HEEL", description: "Sienta"},
			STAY: {code: "stay", next: "DOWN", previous: "SIT", description: "Quieto"},
			DOWN: {code: "down", next: "COME", previous: "STAY", description: "Tumba"},
			COME: {code: "come", next: "HEEL", previous: "DOWN", description: "Ven"},
			HEEL: {code: "heel", next: "SIT", previous: "COME", description: "Junto"}
		}
}
var currentExercise = null;

function init() {
	setBackKeyListener();
	showWelcomeScreen();
}

function getNewSession() {
	var session = {
		date: new Date(),
		sit: 0,
		stay: 0,
		down: 0,
		come: 0,
		heel: 0
	};
	return session;
}

$(document).ready(init);