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
			showEndSessionScreen();
			break;
		case "endSessionScreen":
			resumeSession();
			break;
		case "sessionReviewScreen":
			hideSessionReviewScreen();
			break;
		case "previousSessionsScreen":
			console.log("Yendo a welcomeScreen");
			showWelcomeScreen();
			break;
	}
}

function exit() {
    tizen.application.getCurrentApplication().exit();
}

function formatDay(date) {
	var day = date.getDate();
	if (day < 10) {
		day = '0' + day;
	}
	var month = date.getMonth()+1;
	if (month < 10) {
		month = '0' + month;
	}
	var year = date.getFullYear();
	return day + "/" + month + "/" + year;
}

function formatHour(date) {
	var hours = date.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}
	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	return hours + ':' + minutes;
}

function formatDate(date) {
	return formatDay(date) + ' ' + formatHour(date);
}