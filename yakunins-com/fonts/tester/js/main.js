// JavaScript

function notyfy (text) {
	data.msgcounter += 1
	var id = 'msg' + (data.msgcounter);
	var msgdiv = $('<div class="notification" id="' + id + '"></div>');
	var msgtext = $('<div class="notification-text">' + text + '</div>');
	var msgclose = $('<a class="notification-close">&times;</a>');
	$('#notification-bar').append($(msgdiv));
	$(msgdiv).append($(msgtext), $(msgclose)).fadeIn(250);
	$(msgclose).click(function(event) {
		event.preventDefault();
		$(this).parent().fadeOut(250).remove();
	});
	$(msgdiv).delay(3000).fadeOut(250);
	setTimeout(function() {
	  $(msgdiv).remove();
	}, 3500);
	return true;
}

function logmsg (text) {
	$('#logarea').append(text  + '\n');
	return true;
}


(function($){

$.fn.disableSelection = function() {
	return this.each(function() {           
		$(this).attr('unselectable', 'on')
					 .css({
						 '-moz-user-select':'none',
						 '-webkit-user-select':'none',
						 'user-select':'none',
						 '-ms-user-select':'none'
					 })
					 .each(function() {
						 this.onselectstart = function() { return false; };
					 });
	});
};

})(jQuery);



function xmlToString(xmlData) { 

	var xmlString;
	//IE
	if (window.ActiveXObject){
			xmlString = xmlData.xml;
	}
	// code for Mozilla, Firefox, Opera, etc.
	else{
			xmlString = (new XMLSerializer()).serializeToString(xmlData);
	}
	return xmlString;
}   

