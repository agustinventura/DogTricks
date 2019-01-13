function showPreviousSessionsScreen() {
	hideAllScreens();
	buildSessionsList();
	setPreviousSessionsScreenListeners();
    $("#previousSessionsScreen").show();
}

function setPreviousSessionsScreenListeners() {
	setClickListener($(".sessionItem"), showPreviousSession);
	setRotaryListener(scrollItems);
}

function buildSessionsList() {
	var sessionsList = $("#previousSessionsList");
	listElement = 1;
	sessionsList.empty();
	for (var i = 0; i < localStorage.length; i++) {
		sessionsList.append($('<li>').text(formatDate(new Date(localStorage.key(i)))).addClass('sessionItem'));
	}
}

function scrollItems(ev) {
	var direction = ev.detail.direction;
    if (direction === "CW") {
		if (listElement < localStorage.length) {
			$('.scrollableList').animate(
				{
					scrollTop: $('.previousSessions li:nth-child('+ listElement + ')').position().top - $('.previousSessions li:first').position().top
				}, 
				'slow');
			listElement++;
		}
    } else {
    	if (listElement > 0) {
    		$('.scrollableList').animate(
    				{
    					scrollTop: $('.previousSessions li:nth-child('+ listElement + ')').position().top - $('.previousSessions li:first').position().top
    				}, 
    				'slow');
    		if (listElement > 1) {
    			listElement--;
    		}
    	}
    }
}

function showPreviousSession() {
	var previousSessionIndex = $(this).index();
	var sessionDate = localStorage.key(previousSessionIndex);
	var JSONsession = localStorage.getItem(sessionDate);
	session = JSON.parse(JSONsession);
	showSessionReviewScreen("previousSessionScreen");
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