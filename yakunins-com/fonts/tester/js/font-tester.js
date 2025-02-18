// JavaScript

var data = {
	msgcounter: 0,
	scale: 4,
	fontsize: 16, // in pixels
	lineheight: 20, // in pixels
	spacing: 0
};


$(document).jkey('alt+shift+s', function() { notyfy ('Saved'); });
$(document).jkey('shift+1', function() { notyfy('Shift + 1'); });
$(document).jkey('f12', function() { notyfy('F12'); openeditor(); });

$(document).jkey('[', function() { updateslider( $('#font-size'), -0.5 ); });
$(document).jkey(']', function() { updateslider( $('#font-size'), 0.5 ); });

function setfontsize (percentage) {
	$('#page').css('font-size', (data.fontsize * data.scale * percentage / 100) + 'px');
	$('#page').css('line-height', (data.lineheight * data.scale * percentage / 100) + 'px');
}
function setspacing (value) {
	$('#page').css('letter-spacing',  value + 'em');
}

function updateslider (sliderobj, step) {
	var ratio = parseFloat(sliderobj.val()) + step;
	if (ratio > 200) ratio = 200;
	if (ratio < 50) ratio = 50;
	sliderobj.slider('value', ratio);
}


$(document).ready(function(){
													 

	$('#notification .close').click(function(event) {
		event.preventDefault();
		$("#notification").fadeOut(250);
	});


	$('#x1, #x2, #x4, #x8').change(function() {
		data.scale = $('input:radio[name=scale]:checked').val();
		setfontsize(100);
		$("#page").css;
	});


	$('#advanced-trigger .trigger').click(function(event) {
		event.preventDefault();
		$("#advanced").slideToggle(250);
	});


	$('#caps').change(function() {
		$("#page").toggleClass('all-caps');
	});

	$('#invert').change(function() {
		$("body").toggleClass('inverted');
	});
	
	$('#x' + data.scale).attr('checked', 'true');

	$('#control-room label').disableSelection();
	$('#page div').attr('contentEditable',true);
	$('body').attr('spellcheck',false);

});




