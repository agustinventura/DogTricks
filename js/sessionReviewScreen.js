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
	$(document).on('keyup',function(evt) {
	    goBack("sessionReviewScreen");
	});
}

function setSessionReviewTexts() {
	for (exercise in ExercisesEnum) {
		if (exercise !== "properties") {
			var repetitions = session[ExercisesEnum.properties[exercise].code];
			$("#"+ExercisesEnum.properties[exercise].code+"Repetitions").text(repetitions);
		}
	}
}

function hideSessionReviewScreen() {
	$("#sessionReviewScreen").hide();
	if (originScreen === "sessionScreen") {
		showWelcomeScreen();
	} else {
		showPreviousSessionsScreen();
	}
}