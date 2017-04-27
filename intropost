//<![CDATA[
$('.intro .HTML .widget-content').each(function () {
  var text = $(this).text();
  if (text.match('random')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
        var numpost = datax.feed.entry.length;
        var min = 0; 
        var max = numpost-3; 
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&start-index=" + random + "&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {

              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';


          } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';


          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }


          htmlcode += '<li>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
          if ($(this).text().match('random')) {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('feat-content');
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
          }
        });
      }
    });
      }
    });
  } else if (text.match('recent')) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: 'get',
      dataType: "jsonp",
      success: function (datax) {
      $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);

          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {

              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';


          } else if (content.indexOf("<img") > -1 ) {

            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';


          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }


          htmlcode += '<li>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
          if ($(this).text().match('recent')) {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('feat-content');
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
          }
        });
      }
    });
      }
    });
  } else {
      $.ajax({
      url: "/feeds/posts/default/-/" + text + "?alt=json-in-script&max-results=3",
      type: 'get',
      dataType: "jsonp",
      success: function (data) {
        var posturl = "";
        var htmlcode = '<ul>';
        for (var i = 0; i < data.feed.entry.length; i++) {
          for (var j = 0; j < data.feed.entry[i].link.length; j++) {
            if (data.feed.entry[i].link[j].rel == "alternate") {
              posturl = data.feed.entry[i].link[j].href;
              break;
            }
          }
          var posttitle = data.feed.entry[i].title.$t;
            var content = data.feed.entry[i].content.$t;
            var $content = $('<div>').html(content);
          if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1 ) {
              var src2 = data.feed.entry[i].media$thumbnail.url;
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src2+') no-repeat center center;background-size: cover"/>';
          } else if (content.indexOf("<img") > -1 ) {
            var src = $content.find('img:first').attr('src');
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url('+src+') no-repeat center center;background-size: cover"/>';
          } else {
              var thumb = '<a class="rcp-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>';
          }
          htmlcode += '<li>' + thumb + '<div class="post-panel"><h3 class="rcp-title"><a href="' + posturl + '">' + posttitle + '</a></h3></div></li>';
        }
        htmlcode += '<div class="clear"/></ul>';
        $('.intro .HTML .widget-content').each(function () {
            $(this).html(htmlcode);
            $(this).removeClass('widget-content').addClass('feat-content');
            $(this).find('.rcp-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
        });
      }
    });
  }
});

$(".feat-layout .HTML .widget-content").each(function() {
    var t = $(this).html(),
        k = $(this).prev("h2").text();
    var z = t.match(/[^[\]]+(?=])/g);
    $(this).html("<span>" + z[0] + "</span>");
    var ideas = $(this).text();
    var g = $(this).find("span").eq(0).text();
    var style = "<span>feat1</span>";
    var feat1_number = 3;
    if (style.match('feat1')) {
        $.ajax({
            url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + feat1_number,
            type: 'get',
            dataType: "jsonp",
            success: function(data) {
                var posturl = "";
                var htmlcode = '<ul>';
                for (var i = 0; i < data.feed.entry.length; i++) {
                    for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                        if (data.feed.entry[i].link[j].rel == "alternate") {
                            posturl = data.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var posttitle = data.feed.entry[i].title.$t;
                    var content = data.feed.entry[i].content.$t;
                    var $content = $('<div>').html(content);
                    if (i == 0) {
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            var thumb = '<a class="primeiro-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                        }
                    } else {
                        if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                            var src2 = data.feed.entry[i].media$thumbnail.url;
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                        } else if (content.indexOf("<img") > -1) {
                            var src = $content.find('img:first').attr('src');
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                        } else {
                            var thumb = '<a class="mag-thumb" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                        }
                    };
                    if (i == 0) {
                        htmlcode += '<div class="primeiro"><div class="feat-thumb">' + thumb + '</div><div class="primeiro-content"><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3><div class="share-feat"><a  class="facebook" target="_blank" href="http://www.facebook.com/sharer.php?u='+ posturl +'&amp;title='+ posttitle +'/"><i class="fa fa-facebook-official"></i></a><a class="twitter" target="_blank" href="http://twitter.com/share?url='+ posturl +'&amp;title='+ posttitle +'/"><i class="fa fa-twitter"></i></a><a class="google" target="_blank" href="https://plus.google.com/share?url='+ posturl +'&amp;title='+ posttitle +'/"><i class="fa fa-google-plus"></i></a><a class="pinterest" target="_blank" href="http://pinterest.com/pin/create/button/?url='+ posturl +'/&amp;media='+ src +'&amp;description='+ posttitle +'"><i class="fa fa-pinterest"></i></a></div></div></div>'
                    } else {
                        htmlcode += '<li><div class="feat-thumb">' + thumb + '</div><div class="mag-content"><h3 class="feat-headline"><a href="' + posturl + '">' + posttitle + '</a></h3></div><div class="clear"/></li></div>'
                    }
                }
                htmlcode += '</ul>';
                $(".feat-layout .HTML .widget-content").each(function() {
                    var text = $(this).text();
                    if (text == ideas) {
                        $(this).html(htmlcode);
                        $(this).parent().addClass('feat1');
                        $(this).parent().addClass('feat');
                        $(this).prev("h2").html('<a href="/search/label/' + g + '">' + k + '</a>');
                        $(this).prev("h2").wrap('<div class="feat-title"></div>');
                        $(this).removeClass('widget-content').addClass('feat-content');
                        $(this).find('.primeiro-thumb, .mag-thumb').each(function() {
              $(this).attr('style', function(i, src) {
                return src.replace('/default.jpg', '/mqdefault.jpg');
              }).attr('style', function(i, src) {
                return src.replace('s72-c', 's1600');
              });
            });
            $("p.trans").each(function() {
              var e = $(this).text();
              var t = $(this).attr("data-tran");
              $("#pages-wrapper *").replaceText(e, t)
            });
          }
        });
      }
    });
  }
});

$("#related-posts").each(function() {
    var g = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + g + "?alt=json-in-script&max-results=" + related_number,
        type: 'get',
        dataType: "jsonp",
        success: function(data) {
            var posturl = "";
            var htmlcode = '<div class="related">';
            for (var i = 0; i < data.feed.entry.length; i++) {
                for (var j = 0; j < data.feed.entry[i].link.length; j++) {
                    if (data.feed.entry[i].link[j].rel == "alternate") {
                        posturl = data.feed.entry[i].link[j].href;
                        break
                    }
                }
                var posttitle = data.feed.entry[i].title.$t;
                var content = data.feed.entry[i].content.$t;
                var $content = $('<div>').html(content);
                if (content.indexOf("http://www.youtube.com/embed/") > -1 || content.indexOf("https://www.youtube.com/embed/") > -1) {
                    var src2 = data.feed.entry[i].media$thumbnail.url;
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src2 + ') no-repeat center center;background-size: cover"/>'
                } else if (content.indexOf("<img") > -1) {
                    var src = $content.find('img:first').attr('src');
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + src + ') no-repeat center center;background-size: cover"/>'
                } else {
                    var thumb = '<a class="related-img" href="' + posturl + '" style="background:url(' + no_image_url + ') no-repeat center center;background-size: cover"/>'
                }
                htmlcode += '<li><div class="related-thumb">' + thumb + '</div><h3 class="related-title"><a href="' + posturl + '">' + posttitle + '</a></h3></li>'
            }
            htmlcode += '</div><div class="clear"/>';
            $("#related-posts").html(htmlcode);
            $('#related-posts').removeClass('related-box').addClass('related-content');
            $('.related-img').each(function() {
                $(this).attr('style', function(i, src) {
                    return src.replace('/default.jpg', '/mqdefault.jpg');
                }).attr('style', function(i, src) {
                    return src.replace('s72-c', 's1600');
                });
            });
            $("p.trans").each(function() {
                var e = $(this).text();
                var t = $(this).attr("data-tran");
                $("#pages-wrapper *").replaceText(e, t)
            });
        }
    });
});
