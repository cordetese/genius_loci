$(document).ready(function(){
	//$('#nav').localScroll(800);

// carico i suoni e li associo a una variabile per identificarli    
var mySoundVoice1 = new buzz.sound("", {
    formats: ["mp3"]
});


// imposto il comportamento di ogni suono in funzione delle slide
$('#intro').mouseenter(function(){
    mySoundVoice1.play().loop();
});

$('#intro').mouseleave(function(){
    mySoundWind.stop()
});

	
	RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});	
	
// imposto la posizione e il comportamento delle immagini e dei layers    
    
//.parallax(xPosition, adjuster, inertia, outerHeight) options:
//xPosition - Horizontal position of the element
//adjuster - y position to start from
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    
	$('#intro').parallax("0%", 0, 1, true);
    // $('#titoli_di_testa_01').parallax("80%", 0, 0.1, true);
    // $('#testo_01').parallax("0%", 2000px, 5, true);
	$('#door"').parallax("0%", 700px, 0.5, true);

	
	var deck = new $.scrolldeck({
		slides: '.slide',
		buttons: '#nav li a',
		easing: 'easeInOutExpo'
	});

})