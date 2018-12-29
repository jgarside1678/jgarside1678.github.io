//Stored html 		     <div class = "Contentbox box1"><h1 style ="margin-bottom:0px">G a z e l l e s</h1><p class ="GazelleText" >The original 1999 shoes. <br> A low-profile classic. The Gazelle shoe started life as a football trainer and grew into an iconic streetwear staple. This pair honours the favorite version of 1991, with the same materials, colours and slightly wider proportions. A pigskin leather upper gives these shoes a smooth touch and soft feel.</p><img class = "Shoe" src = "assets/Gazelle.png"></div>

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
	if(screen.width > 999){
	Main();
	jqueryWelcome();
	localData()
	}


}
function localData(){
	
	function firstLoad(){
	if(localStorage.getItem('FirstLoad')){
		firstLoad = 'False';
	}
	else{
	    localStorage.setItem('FirstLoad', 'True');
		firstLoad = 'True';
	}
	}
	if(firstLoad == "True"){ 
	    console.log(firstLoad);
	}
}



function Main() {
	
	
	//Video Sound
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
		$(this).delay(500 * i).fadeIn();
		$('#JoinUsNow').delay(4000).fadeIn();

	})
		setTimeout(function(){
			
		    $('#Welcome').fadeOut();
			
		    setTimeout(function(){
			 	
		        var Welcome2 = $('#Welcome2').html();
                $('#Welcome2').html('').show();
	
	
                var FadeWelcome2 = "<span>" + Welcome2.split(" ").join("</span>"+ " " + "<span>") + "</span>";
                $(FadeWelcome2).hide().appendTo("#Welcome2").each(function(i)
	            {
		        $(this).delay(500 * i).css('font-size', 0+fontSize+"em");
		        $(this).delay(400 * i).fadeIn();
		        $(this).delay(250).fadeOut();
		        console.log(fontSize);
		        fontSize += 0.1;
	            })	
		    }, 1000);
			
		}, 6000);
		
    		
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
    $('#Header').css('display', 'block');
});

		