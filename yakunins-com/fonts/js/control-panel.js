
function loadScript(url, callback)
{
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  head.appendChild(script);
};

function clog(s) {
  console.log(s);
  return true;
};

function updateBodyFontClass(className) {
  $("body").removeClass (function (index, css) {
      return (css.match (/(^|\s)font-\S+/g) || []).join(' ');
  });    
  $("body").addClass("font-" + className);
}


jQuery(document).ready(function () {
$('<div id="control-panel" class="fixed gray-shadow">\
    <div class="panel-header">\
      <div class="expandable-trigger">\
        <div id="o1-trigger" class="small-trigger">\
          <span>View options</span>\
          <span class="helper">hide</span>\
          <span class="helper hidden">show</span>\
        </div>\
      </div>\
    </div>\
    <div id="options1" class="options-container">\
      <div id="ctrl-fontsize" title="Use ] and [ keys, 0 to reset" class="item">\
        <span>Font size: <span data-bind="text: fontMultiplier"></span>%</span><br />\
        <input data-bind="attr: {min: minFontMultiplier, max: maxFontMultiplier}, value: fontMultiplier" type="range" id="fntsze" />\
      </div>\
      <div id="ctrl-spacing" title="Use Shift+] and Shift+[, 0 to reset" class="item">\
        <span>Letter spacing: <span data-bind="text: letterSpacing"></span></span><br />\
        <input data-bind="attr: {min: minSpacing, max: maxSpacing}, value: letterSpacing" type="range" id="ltrspc" />\
      </div>\
      <div id="ctrl-more" class="item">\
        <a href="#random-colors" class="button" id="rndclr" title="Set random colors (R)">Random color</a>\
        <a href="#invert-colors" class="button" id="invclr" title="Invert colors (I)">Invert</a>\
        <a href="#reset-colors" class="button" id="rstclr" title="Reset colors (C)">Reset</a>\
      </div>\
    </div>\
    <hr />\
    <div class="panel-header">\
      <div class="expandable-trigger">\
        <div id="o2-trigger" class="small-trigger">\
          <span>Typography</span>\
          <span class="helper">hide</span>\
          <span class="helper hidden">show</span>\
        </div>\
      </div>\
    </div>\
    <div id="options2" class="options-container">\
      <div id="advanced" class="item" title="Next font (0), prev font (9)">\
       <select class="styled-select" id="font-selector">\
          <option value="rayon-light">Rayon Light</option>\
          <option value="rayon-light-italic">Rayon Light Italic</option>\
          <option value="rayon-semilight">Rayon Semilight</option>\
          <option value="rayon-semilight-italic">Rayon Semilight Italic</option>\
          <option value="rayon-regular">Rayon Regular</option>\
          <option value="rayon-regular-italic">Rayon Italic</option>\
          <option value="rayon-medium">Rayon Medium</option>\
          <option value="rayon-medium-italic">Rayon Medium Italic</option>\
          <option value="rayon-bold">Rayon Bold</option>\
          <option value="rayon-bold-italic">Rayon Bold Italic</option>\
          <option value="rayon-black">Rayon Black</option>\
          <option value="rayon-black-italic">Rayon Black Italic</option>\
       </select>\
      </div>\
      <div id="advanced" class="item">\
        <label for="caps" title="Toggle All caps (A)"><input id="caps" type="checkbox" />All caps</label><br />\
        <label for="smcp" title="Toggle All caps (S)"><input id="smcp" type="checkbox" />Small caps</label>\
      </div>\
    </div>\
    </div>\
  </div>').appendTo("header");


$("<link/>", { rel: "stylesheet", type: "text/css",  href: "css/control-panel.css", media: "all" }).appendTo("head");
$("<link/>", { rel: "stylesheet", type: "text/css",  href: "css/range-slider.css", media: "all" }).appendTo("head");


//$(document).jkey('alt+shift+s', function() { notyfy ('Saved'); });
//$(document).jkey('shift+1', function() { notyfy('Shift + 1'); });

//  $("#o1-trigger .helper.show").toggle();
//  $("#o2-trigger .helper.show").toggle();
//  $("#options2-container").hide();


  var timespan = 100;
  $('#o1-trigger').click(function(event) {
    $("#options1").toggleClass("hidden");
    $("#o1-trigger .helper").toggleClass("hidden");
  });
  $('#o2-trigger').click(function(event) {
    $("#options2").toggleClass("hidden");
    $("#o2-trigger .helper").toggleClass("hidden");
  });


  $('#caps').change(function() {
    event.preventDefault();
    $("body").toggleClass('all-caps');
  });
  $('#smcp').change(function() {
    event.preventDefault();
    $("body").toggleClass('smcp');
  });

  $(document).on('keydown', null, 'a', function() {  $('#caps').trigger('click');  });
  $(document).on('keydown', null, 's', function() {  $('#smcp').trigger('click');  });
  
  $(document).on('keydown', null, '0', function() {
    $('#font-selector option:selected').next().attr('selected', 'selected');
    updateBodyFontClass( $('#font-selector').val() );
  });
  $(document).on('keydown', null, '9', function() {
    $('#font-selector option:selected').prev().attr('selected', 'selected');
    updateBodyFontClass( $('#font-selector').val() );
  });


  updateBodyFontClass( $('#font-selector').val() );

  $('#font-selector').change(function() {
    event.preventDefault();
    updateBodyFontClass(this.value);
  });




});
