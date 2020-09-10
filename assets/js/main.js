jQuery(function ($) {
  "use strict";

  var _Blog = window._Blog || {};

  _Blog.prettify = function () {
    $("pre").addClass("prettyprint linenums").attr("style", "overflow:auto;");
    window.prettyPrint && prettyPrint();
  };

  _Blog.externalUrl = function () {
    $.expr[":"].external = function (obj) {
      return !obj.href.match(/^mailto\:/) && obj.hostname != location.hostname;
    };
    $("a:external").addClass("external");
    $(".external").attr("target", "_blank");
  };

  // 在用户切换网页时改变浏览器标题
  _Blog.changeTitle = function () {
    var currentTitle = document.title;
    window.onblur = function () {
      document.title = "哎,来打我呀!(＞﹏＜)";
    };
    window.onfocus = function () {
      document.title = currentTitle;
    };
  };

  _Blog.toggleTheme = function () {
    const currentTheme =
      window.localStorage && window.localStorage.getItem("theme");
    const isDark = currentTheme === "dark";
    $(".theme-switch").on("click", () => {
      $("body").toggleClass("dark-theme");
      window.localStorage &&
        window.localStorage.setItem(
          "theme",
          document.body.classList.contains("dark-theme") ? "dark" : "light"
        );
    });
  };

  _Blog.toggleMobileMenu = function () {
    $(".menu-toggle").on("click", () => {
      $(".menu-toggle").toggleClass("active");
      $("#mobile-menu").toggleClass("active");
    });
  };

  // 顶部阅读进度条
  _Blog.scrollIndicator = function () {
    $(document).ready(function () {
      $(window).scroll(function () {
        $(".top-scroll-bar").attr(
          "style",
          "width: " +
            ($(this).scrollTop() / ($(document).height() - $(this).height())) *
              100 +
            "%; display: block;"
        );
      });
    });
  };

  //文章目录
  _Blog.articleToc = function () {
    window.onload = function () {
      var fix = $(".post-toc");
      var end = $(".post-comment");
      var fixTop = fix.offset().top,
        fixHeight = fix.height();
      var endTop, miss;
      var offsetTop = fix[0].offsetTop;

      $(window).scroll(function () {
        var docTop = Math.max(
          document.body.scrollTop,
          document.documentElement.scrollTop
        );

        if (end.length > 0) {
          endTop = end.offset().top;
          miss = endTop - docTop - fixHeight;
        }

        if (fixTop < docTop) {
          fix.css({
            position: "fixed",
          });
          if (end.length > 0 && endTop < docTop + fixHeight) {
            fix.css({
              top: miss,
            });
          } else {
            fix.css({
              top: 120,
            });
          }
        } else {
          fix.css({
            position: "absolute",
          });
          fix.css({
            top: offsetTop,
          });
        }
      });
    };
  };

  $(document).ready(function () {
    _Blog.prettify();
    _Blog.changeTitle();
    _Blog.scrollIndicator();
    _Blog.toggleTheme();
    _Blog.toggleMobileMenu();
    _Blog.articleToc();
  });
});
