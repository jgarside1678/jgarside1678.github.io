
var opacity = 1;
var firstLoad;
var fontSize = 1;
var i = 0;
var ShoeInfoID = ['ShoeInfo1', 'ShoeInfo2', 'ShoeInfo3'];
var CircleMarkers = ['Circle1', 'Circle2', 'Circle3'];
var video = document.getElementById('Video1');
var automatedSlider;
var Changing;

window.onload = function(){
	HeaderWelcome();
	Main();
	jqueryWelcome();
	localData();
	MobileNav();


}
function localData(){

    try{
	if(localStorage.getItem('FirstLoad')){
		firstLoad = 'False';
	}
	else{
	    localStorage.setItem('FirstLoad', 'True');
		firstLoad = 'True';
	}
	if(firstLoad == "True"){ 
	    console.log(firstLoad);
	}
	}
	catch (j){}
}



function Main() {
	//Video Sound
	localData();
	Section1.addEventListener('click', function(){
		if(video.muted){
		console.log('Video Sound: True')
		video.muted = false;
		var on = $('.videoVolume').html('<i class="fas fa-volume-up"></i>');
		}
		else
		{		
	        console.log('Video Sound: False');
			video.muted = true;
			$('.videoVolume').html('<i class="fas fa-volume-mute"></i>');
	    }
	})
	
	//ButtonSliders
	automatedSlider = setInterval( function(){
		if(!Changing){
		  ShoeInfoRight();
		}
    }, 12000);
	
	var Slider1 = document.getElementById("slider1");
	Slider1.addEventListener("click", function(){
		if(!Changing){
		  ShoeInfoLeft();
		}
	})
	var Slider2 = document.getElementById("slider2");
	Slider2.addEventListener("click", function(){
		if(!Changing){
		  ShoeInfoRight();
		}
	})
}

	


//Apearing words on video

function jqueryWelcome(){
	var Welcome = $("#Welcome").html();
    $("#Welcome").html("").show();
	
	
    var FadeWelcome = "<span>" + Welcome.split(" ").join("</span>"+ " " + "<span>") + "</span>";
    $(FadeWelcome).hide().appendTo("#Welcome").each(function(i)
	{
		$(this).delay(50 * i).fadeIn(3000);
		setTimeout(function(){
		$("#Welcome").fadeOut();
		},3000);
	})	
}


//Javascript Fade In and Fade Out fucntions for html content
function ShoeInfoLeft(){
	Changing = true;
	CircleB = document.getElementById(CircleMarkers[i]).style;
	CircleB.backgroundColor = '#999';
	ShoeInfo = document.getElementById(ShoeInfoID[i]).style;
	ShoeInfo.opacity = 1;
	(function fade(){(ShoeInfo.opacity-=.1) <0? ShoeInfo.display="none":setTimeout(fade,40)})();
	setTimeout(function(){ 
	ShoeInfo.opacity = 1
	if(i > 0){
	i--;
	}
	else {i = (ShoeInfoID.length - 1);}
	CircleB = document.getElementById(CircleMarkers[i]).style;
	CircleB.backgroundColor = 'white';
	ShoeInfo = document.getElementById(ShoeInfoID[i]).style;
	ShoeInfo.opacity = 0;
	var opacity = setInterval( function(){
		if(ShoeInfo.opacity < 1)	{	ShoeInfo.opacity = parseFloat(ShoeInfo.opacity) + 0.02;}
		else{clearInterval(opacity);}
	}, 20)
	ShoeInfo.display = "block";
	console.log(ShoeInfo);
	setTimeout( function(){
		Changing = false;
	}, 2000);
	
	}, 1000);

}
function ShoeInfoRight(){
	Changing = true;
	CircleB = document.getElementById(CircleMarkers[i]).style;
	CircleB.backgroundColor = '#999';
	ShoeInfo = document.getElementById(ShoeInfoID[i]).style;
	ShoeInfo.opacity = 1;
	(function fade(){(ShoeInfo.opacity-=.1) <0? ShoeInfo.display="none":setTimeout(fade,40)})();
	setTimeout(function(){ 
	ShoeInfo.opacity = 1
	if(i < (ShoeInfoID.length - 1)){
	i++;
	}
	else {i = 0;}
	CircleB = document.getElementById(CircleMarkers[i]).style;
	CircleB.backgroundColor = 'white';
	ShoeInfo = document.getElementById(ShoeInfoID[i]).style;
	ShoeInfo.opacity = 0;
	var opacity = setInterval( function(){
		if(ShoeInfo.opacity < 1)	{	ShoeInfo.opacity = parseFloat(ShoeInfo.opacity) + 0.1;}
		else{clearInterval(opacity);}
	}, 40)
	ShoeInfo.display = "block";
	console.log(ShoeInfo);
	setTimeout( function(){
		Changing = false;
	}, 2000);
	
	}, 1000);



}


$(window).scroll(function() {
	video.muted = true;
    $('.videoVolume').html('<i class="fas fa-volume-mute"></i>');
    $('#Header').css('display', 'inline');
});



function isOverflown(element) {
    return element.scrollHeight > element.clientHeight  ||  element.scrollWidth > element.clientWidth;
}

function HeaderWelcome(){
	var AccountName = document.getElementById('AccountName');
	try{
	if(localStorage.getItem('Username')){
		var UserName = localStorage.getItem('Username')
		console.log(UserName);
		AccountName.innerHTML = ' &nbsp;&nbsp; Welcome Back &nbsp;&nbsp;'+UserName+'';
		$('#LoginButton').html('&nbsp;&nbsp; Log Out');
	}
	}
	catch (e){
	}
}


function MobileNav(){
	var MobileMenu = document.getElementById('MobileNav');
	var MobileNavDrop = document.getElementById('MobileNavDrop').style;
	MobileMenu.addEventListener('click', function(i){
		MobileNavDrop.display = 'block';
	})
	var Main = document.getElementById('Main');
	Main.addEventListener('click', function(){
		if(MobileNavDrop.display == 'block'){
			MobileNavDrop.display = 'none'
		}
	})
}