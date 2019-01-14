function showSessionScreen() {
	initSession()
	showGraphics()
}

function initSession() {
	setSessionScreenListeners();
	session = getNewSession();
	currentExercise = ExercisesEnum.SIT;
}

function showGraphics() {
	hideAllScreens();
	setSessionScreenListeners();
	showExercise();
	$("#sessionScreen").show();
}

function setSessionScreenListeners() {
	setRotaryListener(changeExercise);
	setClickListener($("#previousExerciseArrow"), showPreviousExercise);
	setClickListener($("#previousExerciseCell"), showPreviousExercise);
	setClickListener($("#nextExerciseArrow"), showNextExercise);
	setClickListener($("#nextExerciseCell"), showNextExercise);
	setClickListener($("#exerciseDone"), increaseExerciseCounter);
	$(document).on('keyup',function(evt) {
	    showEndSessionScreen();
	});

}

function showExercise() {
	$("#exerciseName").text(ExercisesEnum.properties[currentExercise].description);
	$("#exerciseCounter").text(session[ExercisesEnum.properties[currentExercise].code]);
}

function changeExercise(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
        showNextExercise();
    } else {
        showPreviousExercise();
    }
}

function showPreviousExercise() {
	currentExercise = ExercisesEnum.properties[currentExercise].previous;
	showExercise();
}

function showNextExercise() {
	currentExercise = ExercisesEnum.properties[currentExercise].next;
	showExercise();
}

function increaseExerciseCounter() {
	session[ExercisesEnum.properties[currentExercise].code]++;
	$("#exerciseCounter").text(session[ExercisesEnum.properties[currentExercise].code]);
}

function resumeSession() {
	showGraphics();
}

function endSession() {
	var jsonSession = JSON.stringify(session);
	localStorage.setItem(session.date, jsonSession);
	showSessionReviewScreen("sessionScreen");
}