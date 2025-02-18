// JavaScript

var data = {
	msgcounter: 0,
	zoom: 1,
	showcontour: 1,
	showvertices: 0,
};

$(document).jkey('ctrl+s', function() { notyfy ('Ctrl + s'); });
$(document).jkey('ctrl+w', function() { notyfy('Ctrl + w'); });

function saveglyph () {
	return true;
}


$(document).ready(function(){

	$('#closedocument').click(function(event) {
		event.preventDefault();
		saveglyph();
		$("#notification").fadeOut(250);
	});

	$('#control-room label').disableSelection();

});



