function showWelcomeScreen() {
	hideAllScreens();
	setWelcomeScreenListeners();
    $("#welcomeScreen").show();
}

function setWelcomeScreenListeners() {
	setRotaryListener(null);
	setClickListener($("#newSession"), showSessionScreen);
	setClickListener($("#previousSessions"), showPreviousSessionsScreen);
}