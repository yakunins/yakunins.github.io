/*
* FeedEk jQuery RSS/ATOM Feed Plugin v2.0
* http://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
* Author : Engin KIZIL http://www.enginkizil.com   
*/

(function ($) {
    $.fn.FeedEk = function (opt) {
        var def = $.extend({
            FeedUrl: "http://rss.cnn.com/rss/edition.rss",
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            CharacterLimit: 0,
            TitleLinkTarget: "_blank",
            DateFormat: "",
            DateFormatLang:"en"
        }, opt);

        var id = $(this).attr("id"), i, s = "",dt;
        $("#" + id).empty().append('<div class="loader"></div>');

        $.ajax({
//            url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def.MaxCount + "&output=json&q=" + encodeURIComponent(def.FeedUrl) + "&hl=en&callback=?",
            url: "http://pipes.yahoo.com/pipes/pipe.run?_id=4b54b4979f712cc6990a5eb560a7d97b&_render=json",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                $.each(data.responseData.feed.entries, function (e, item) {
                    s += '<li><span class="title"><a href="' + item.link + '" target="' + def.TitleLinkTarget + '" >' + item.title + "</a></span>";
                    
                    if (def.ShowPubDate){
                        dt= new Date(item.publishedDate);
                        if ($.trim(def.DateFormat).length > 0) {
                            try {
                                moment.lang(def.DateFormatLang);
                                s += '<span class="date">' + moment(dt).format(def.DateFormat) + "</span>";
                            }
                            catch (e){s += '<span class="date">' + dt.toLocaleDateString() + "</span>";}                            
                        }
                        else {
                            s += '<span class="date">' + dt.toLocaleDateString() + "</span>";
                        }                        
                    }
                    if (def.ShowDesc) {
                        if (def.DescCharacterLimit > 0 && item.content.length > def.DescCharacterLimit) {
                            s += '<span class="content">' + item.content.substr(0, def.DescCharacterLimit) + "...</span>";
                        }
                        else {
                            s += '<span class="content">' + item.content + "</span>";
                        }
                    }
                });
                $("#" + id).append('<ul class="rss">' + s + "</ul>");
            }
        });
    };
})(jQuery);