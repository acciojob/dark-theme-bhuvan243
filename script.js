//your code here
const mainDiv = document.getElementById('app');
const button = document.getElementById('swap');

function swapTheme() {
	if (mainDiv.className == 'day'){
		mainDiv.className = 'night';
		button.className = 'button_night';
	}
	else {
		mainDiv.className = 'day';
		button.className = 'button_day';
	}
}
button.addEventListener('click', swapTheme);