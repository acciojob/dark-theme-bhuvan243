//your code here
const mainDiv = document.getElementById('app');

function swapTheme() {
	if (mainDiv.className == 'day'){
		mainDiv.className = 'night';
	}
	else {
		mainDiv.className = 'day';
	}
}