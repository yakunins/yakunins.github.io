// JavaScript

var data = {
	msgcounter: 0,
	scale: 1, // Only 1, 2, 4, 8
	initialFontSize: parseFloat($("html").css("font-size")), // in px
	initialFontMultiplier: 100, // %
	maxFontMultiplier: 300, 
	minFontMultiplier: 1, 
	lineHeight: 20, // in pixels
	letterSpacing: 0, // in 1/1000 of em
	maxLetterSpacing: 100, 
	minLetterSpacing: -100, 
	invertColors: 0,
};

data.fontMultiplier = data.initialFontMultiplier;
//var data = getFromCookies();   
//var data = getDataUsingAjax();   

function viewModel() {
    this.maxFontMultiplier = ko.observable(data.maxFontMultiplier);
    this.minFontMultiplier = ko.observable(data.minFontMultiplier);
    this.fontMultiplier = ko.observable(data.fontMultiplier);
    this.fontMultiplier.subscribe(function (value) {
        data.fontMultiplier = value;
        updateFontSize();
    });
    this.changeFontMultiplier = function (increment) {
    	var newFontMultiplier = parseInt(data.fontMultiplier, 10) + increment;
		console.log("Font size is " + newFontMultiplier + "% of initial");
    	if ( data.minFontMultiplier <= newFontMultiplier && newFontMultiplier <= data.maxFontMultiplier ) {
	        this.fontMultiplier(newFontMultiplier);
    	};
    }

    this.maxSpacing = ko.observable(100);
    this.minSpacing = ko.observable(-100);
    this.letterSpacing = ko.observable(data.letterSpacing);
    this.letterSpacing.subscribe(function (value) {
        data.letterSpacing = value;
        updateSpacing();
    });
    this.changeLetterSpacing = function (increment) {
    	var newLetterSpacing = parseInt(data.letterSpacing) + increment;
		console.log("Letter spacing is " + newLetterSpacing + "em");
    	if ( data.minLetterSpacing <= newLetterSpacing && newLetterSpacing <= data.maxLetterSpacing ) {
	        this.letterSpacing(newLetterSpacing);
    	};
    }
}

function updateFontSize() {
	x = (data.scale * data.fontMultiplier / 100);
	newFontSize = data.initialFontSize * x;
	$("html").css("font-size", newFontSize + "px");
}

function updateSpacing() {
	newSpacing = (data.scale * data.letterSpacing / 1000);
	$("body").css("letter-spacing", newSpacing + "em");
}

function setColors(textColor, bgColor) {
	data.textColor = textColor;
	data.bgColor = bgColor;
	$('body').css('color', textColor);
	$('body').css('background-color', bgColor);
}

$(document).ready(function() {
	updateFontSize();
	setColors("#000", "#fff");

	var vm = new viewModel()
	ko.applyBindings(vm);
	$("#fntsze").on("input change", function() { vm.fontMultiplier(this.value); });
	$("#ltrspc").on("input change", function() { vm.letterSpacing(this.value); });


	// colors
	$("#rndclr").click(function(event) {
		event.preventDefault();
		setColors(
			Please.make_color({golden: false, full_random: true}), 
			Please.make_color({golden: false, full_random: true})
		);
	});
	$("#rstclr").click(function(event) {
		event.preventDefault();
		setColors("#000", "#fff");
	});
	$("#invclr").click(function(event) {
		event.preventDefault();
		setColors(data.bgColor, data.textColor)
	});


	// keyboard shortcuts
	$(document).on('keydown', null, ']', function() { vm.changeFontMultiplier(1); });
	$(document).on('keydown', null, '[', function() { vm.changeFontMultiplier(-1); });

	$(document).on('keydown', null, 'shift+]', function() { vm.changeLetterSpacing(5); });
	$(document).on('keydown', null, 'shift+[', function() { vm.changeLetterSpacing(-5); });

	$(document).on('keydown', null, '0', function() { 
		vm.fontMultiplier(data.initialFontMultiplier); 
		vm.letterSpacing(0); 
	});

	$(document).on('keydown', null, 'r', function() { 
		setColors(
			Please.make_color({golden: false, full_random: true}), 
			Please.make_color({golden: false, full_random: true})
		);
	});
	$(document).on('keydown', null, 'c', function() { setColors("#000", "#fff") });
	$(document).on('keydown', null, 'i', function() { setColors(data.bgColor, data.textColor) });


	$("a i").closest("a").addClass("thin-underline");


  $('#page div').attr('contentEditable',true);
  $('body').attr('spellcheck',false);
});


function loadPage(pageNumber, itemsPerPage) {
  var template = '<div id="page' + pageCount + '" class="rss rss-page">';
  var currentOffset = (pageNumber * itemsPerPage) + 1;
  console.log('Page loaded in: ' + template + ', offset: ' + currentOffset);
  $page = $(template).appendTo("#rss-feed");

  $page.rssfeed([rssSource], {
    header: false,
    limit: itemsPerPage,
    media: false,
    offset: currentOffset,
    titletag: 'h1',
  });
}

function insertSpinner(delay) {
  var spinner = new Spinner(spinnerOptions).spin();
  $('#rss-feed').append(spinner.el);
  $('.spinner').append("<div class='spinner-bg'></div>");
  $('.spinner-bg').css("background-color", data.bgColor);
  setTimeout(function() {
    $('.spinner').remove();
    $('.spinner-bg').remove();
  }, delay);
}

var spinnerOptions = {
  lines: 20, 
  length: 10,
  width: 2, 
  radius: 20,
  corners: 0,
  rotate: 0,
  direction: 1,
  color: '#000',
  speed: 1, // Rounds per second
  trail: 27, // Afterglow percentage
  shadow: false,
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner',
  zIndex: 2e9,
  top: '100%',
  left: '48%',
};


var scrollListener = function () {
    $(window).one("scroll", function () { //unbinds itself every time it fires
		delay = 500;

        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {

			insertSpinner(delay);
			setTimeout(function() {
				loadPage(pageCount, rssItemsPerPage);
				pageCount += 1;
			}, delay);

        }
        setTimeout(scrollListener, delay); //rebinds itself after 200ms
    });
};



