YUI({ filter:'raw' }).use("io-xdr", "json-parse", "node", "event", "node-event-simulate", 
  function(Y) {
    var output = Y.one("#output ul"); // Data fetched will be displayed in a UL in the element #output:
    var handleStart = function(id, a) { // Event handler called when the transaction begins:
      Y.log("io:start firing.", "info", "example");
      output.setHTML("<li>Loading news stories via Yahoo! Pipes feed...</li>");
    }
    var handleSuccess = function(id, o, a) { // Event handler for the success event -- use this handler to write the fetched RSS items to the page.
      var oRSS = Y.JSON.parse(o.responseText); // We use JSON.parse to sanitize the JSON (as opposed to simply performing an JavaScript eval of the data):
      if (oRSS && oRSS.count) { // From here, we simply access the JSON data from where it's provided in the Yahoo! Pipes output:
        var s = "<!--begin news stories fetched via Yahoo! Pipes-->",
          template = "\n"
          + "<li class='item'>\n"
          + "  <div class='date'>{pubDate}</div>\n"
          + "  <h1 class='title thin-underline'><a href='{link}'><i>{title}</i></a></h1>\n"
          + "  <p class='content'>{description}</p>\n"
          + "</li>"; // simple template; this is fed to Y.Lang.sub() as we loop through RSS items:
        for (var i=0; i<oRSS.count; i++) {
          s += Y.Lang.sub(template, oRSS.value.items[i]);
        }
        output.setHTML(s); // Output the string to the page:
        output.addClass("yui-null");
      } else {
        var s = "<li>The RSS feed did not return any items.</li>"; // No news stories were found in the feed.
      }
    }
    var handleFailure = function(id, o, a) { // In the event that the HTTP status returned does not resolve to, HTTP 2xx, a failure is reported and this function is called:
      Y.log("ERROR " + id + " " + a, "info", "example");
      if (o.status === 0) {
        output.setHTML('<li>The service might be down - ' +
        'would you like to <a href="xdr.html?mock=true">try this '+
        'example with mock data</a>?</li>');
      }
    }
    var cfg = { // With all the apparatus in place, we can now configure our IO call. The method property is defined, but if omitted, IO will default to HTTP GET.
      method: "GET",
      xdr: {
        use:'native'
      },
      on: {
        start: handleStart, // Our event handlers previously defined:
        success: handleSuccess,
        failure: handleFailure
      }
    };
    var handleClick = function(o) { // Wire the button to a click handler to fire our request each  time the button is clicked:
      Y.log("Click detected; beginning io request to Yahoo! Pipes.", "info", "example");
      var obj = Y.io(
        rssSource, // this is a specific Pipes feed, populated with cycling news:
        cfg
      );
    }
    Y.on("click", handleClick, "#pipes"); // add the click handler to the Load button.
    Y.one("#pipes").simulate("click");
  }
);
