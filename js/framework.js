function hideAllScreens() {
	$("#welcomeScreen").hide();
	$("#sessionScreen").hide();
	$("#endSessionScreen").hide();
	$("#sessionReviewScreen").hide();
	$("#previousSessionsScreen").hide();
}

function setClickListener(element, listener) {
	element.off("click");
	element.click(listener);
}

function setRotaryListener(listener) {
	$(document).off('rotarydetent');
	$(document).on('rotarydetent', listener);
}

function setBackKeyListener() {
	$(window).off('tizenhwkey');
    $(window).on('tizenhwkey', function(e) {
    	backPressed(e);
    });
}

function backPressed(e) {
    var activeDivId = $('.clock:visible').not(":hidden").prop("id")
    if (e.originalEvent.keyName === 'back') {
		goBack(activeDivId);
    }
}

function goBack(activeDivId) {
	switch (activeDivId) {
		case "welcomeScreen":
			exit();
			break;
		case "sessionScreen":
			endSessionScreenShow();
			break;
		case "endSessionScreen":
			sessionResume();
			break;
		case "sessionReviewScreen":
			hideSessionReviewScreen();
			break;
		case "previousSessionsScreen":
			showWelcomeScreen();
			break;
	}
}

function exit() {
    tizen.application.getCurrentApplication().exit();
}