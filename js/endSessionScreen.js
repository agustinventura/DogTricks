function showEndSessionScreen() {
	hideAllScreens();
	setEndSessionScreenListeners();
    $("#endSessionScreen").show();
}

function setEndSessionScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#endSession"), endSession);
	setClickListener($("#continueSession"), resumeSession);
}