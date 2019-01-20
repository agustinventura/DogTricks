var originScreen = null;

function showSessionReviewScreen(screen) {
	originScreen = screen;
	hideAllScreens();
	setSessionReviewScreenListeners();
	setSessionReviewTexts();
    $("#sessionReviewScreen").show();
}

function setSessionReviewScreenListeners() {
	setRotaryListener(null);
}

function setSessionReviewTexts() {
	$("#sessionDate").text(formatDate(session.date));
	for (exercise in ExercisesEnum) {
		if (exercise !== "properties") {
			var repetitions = session[ExercisesEnum.properties[exercise].code];
			$("#"+ExercisesEnum.properties[exercise].code+"Repetitions").text(repetitions);
		}
	}
}

function hideSessionReviewScreen() {
	if (originScreen === "sessionScreen") {
		showWelcomeScreen();
	} else {
		showPreviousSessionsScreen();
	}
}