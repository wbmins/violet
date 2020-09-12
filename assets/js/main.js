jQuery(function ($) {
  "use strict";

  var _Blog = window._Blog || {};

  //链接新窗口打开
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
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const progressBar = document.querySelectorAll(".content_progress");
    progressBar.forEach(function (progressBarItem) {
      progressBarItem.max = docHeight - winHeight;
      progressBarItem.value = window.scrollY;
    });

    document.addEventListener("scroll", function () {
      progressBar.forEach(function (progressBarItem) {
        progressBarItem.max = docHeight - winHeight;
        progressBarItem.value = window.scrollY;
      });
    });
  };

  //文章目录
  _Blog.articleToc = function () {
    window.onload = function () {
      var fix = $(".post-toc");
      var end = $(".vpower txt-right");
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
              top: 0,
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

  // 为代码块添加 Copy 按钮
  _Blog.addCopyBottons = function () {
    // Check if the browser supports navigator.clipboard
    if (navigator && navigator.clipboard) {
      copyButtons(navigator.clipboard);
    } else {
      var script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js";
      script.integrity = "sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=";
      script.crossOrigin = "anonymous";
      script.onload = function () {
        copyButtons(clipboard);
      };

      document.body.appendChild(script);
    }

    function copyButtons(clipboard) {
      document.querySelectorAll("pre > code").forEach(function (codeBlock) {
        var button = document.createElement("button");
        button.className = "copy-code-button";
        button.type = "button";
        button.innerText = "Copy";

        button.addEventListener("click", function () {
          clipboard.writeText(codeBlock.innerText).then(
            function () {
              /* Chrome doesn't seem to blur automatically,
                       leaving the button in a focused state. */
              button.blur();

              button.innerText = "Copied!";

              setTimeout(function () {
                button.innerText = "Copy";
              }, 2000);
            },
            function (error) {
              button.innerText = "Error";
            }
          );
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains("highlight")) {
          var highlight = pre.parentNode;
          highlight.appendChild(button);
        }
      });
    }
  };

  $(document).ready(function () {
    _Blog.externalUrl();
    _Blog.addCopyBottons();
    _Blog.changeTitle();
    _Blog.scrollIndicator();
    _Blog.toggleTheme();
    _Blog.toggleMobileMenu();
    _Blog.articleToc();
  });
});
