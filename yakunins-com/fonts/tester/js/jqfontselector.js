/**
* Font selector plugin
* turns an ordinary input field into a list of web-safe fonts
* Usage: $('select').fontSelector();
*
* Author     : James Carmichael
* Website    : www.siteclick.co.uk
* License    : MIT
*/
jQuery.fn.fontSelector = function() {

  var fonts = new Array(
'Arial',
'Arno Pro',
'Bookman Old Style',
'Calibri',
'Century Schoolbook',
'Corbel',
'Georgia',
'Gabriola',
'Helvetica',
'Minion Pro',
'Myriad Pro',
'PT Sans',
'Segoe UI',
'Ubuntu',
'Times',
'Verdana' );
  
  return this.each(function(){

    // Get input field
    var sel = this;

    // Add a ul to hold fonts
    var ul = $('<ul class="fontselector"></ul>');
    $('body').prepend(ul);
    $(ul).hide();

    jQuery.each(fonts, function(i, item) {
      
      $(ul).append('<li><a href="#" class="font_' + i + '">' + item.split(',')[0] + '</a></li>');

      // Prevent real select from working
      $(sel).focus(function(ev) {

        ev.preventDefault();

        // Show font list
        $(ul).show();
        
        // Position font list
        $(ul).css({ top:  $(sel).offset().top + $(sel).height() + 4,
                    left: $(sel).offset().left});

        // Blur field
        $(this).blur();
        return false;
      });


      $(ul).find('a').click(function() {
        var font = fonts[$(this).attr('class').split('_')[1]];
        $('#font-face').attr('style', 'font-family: ' + font + ' !important');
        $(sel).val(font);
        $(ul).hide();
        return false;
      });
    });

  });

}

jQuery.fn.fontStyleSelector = function() {

  var fontStyles = new Array(
'normal',
'italic',
'oblique' );
 
  return this.each(function(){

    // Get input field
    var sel = this;

    // Add a ul to hold fonts
    var ul = $('<ul class="font-style-selector"></ul>');
    $('body').prepend(ul);
    $(ul).hide();

    jQuery.each(fontStyles, function(i, item) {
      
      $(ul).append('<li><a href="#" class="type_' + i + '">' + item.split(',')[0] + '</a></li>');

      // Prevent real select from working
      $(sel).focus(function(ev) {

        ev.preventDefault();

        // Show font list
        $(ul).show();
        
        // Position font list
        $(ul).css({ top:  $(sel).offset().top + $(sel).height() + 4,
                    left: $(sel).offset().left});

        // Blur field
        $(this).blur();
        return false;
      });


      $(ul).find('a').click(function() {
        var font = fontStyles[$(this).attr('class').split('_')[1]];
        $('#font-style').attr('style', 'font-style: ' + font + ' !important');
        $(sel).val(font);
        $(ul).hide();
        return false;
      });
    });

  });

}