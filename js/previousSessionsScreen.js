var listElement = 0;

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
		if ((localStorage.length - listElement) > 6) {
			listElement++;
			$('.scrollableList').animate(
				{
					scrollTop: $('.previousSessions li:nth-child('+ listElement + ')').position().top - $('.previousSessions li:first').position().top
				}, 
				'slow');
		}
    } else {
    	if (listElement > 1) {
    		listElement--;
    		$('.scrollableList').animate(
    				{
    					scrollTop: $('.previousSessions li:nth-child('+ listElement + ')').position().top - $('.previousSessions li:first').position().top
    				}, 
    				'slow');
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