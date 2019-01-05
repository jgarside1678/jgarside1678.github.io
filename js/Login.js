



window.onload = function(){
	console.log('fuck');
	if(screen.width > 999){
	Main();
		console.log('fuck');
	}


}

function Main() {
	var LoginSubmit = document.getElementById('LoginSubmit')
	var UsernameInput = document.getElementById('UsernameInput');
	LoginSubmit.addEventListener('click', function(){
	localStorage.setItem('Username', UsernameInput.value);
	})
}






function isOverflown(element) {
    return element.scrollHeight > element.clientHeight  ||  element.scrollWidth > element.clientWidth;
}