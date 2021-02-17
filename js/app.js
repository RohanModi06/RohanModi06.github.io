const navbar = document.querySelector(".navbar");
const navbar_col = document.querySelector(".navbar-collapse");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgb(77, 196, 125)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};

setTimeout(() => {
  document.querySelector("#start").style.transform = "scaleY(0)";
}, 5);

// document.querySelector("#start").style.transform = "scaleY(0)";

(function ($) {
  function initParallax() {
    $("#intro").parallax("60%", 100);
    $("#skills").parallax("100%", 80);
    // $("#project").parallax("80%", 60);
    // $("#team").parallax("40%", 40);
    // $("#contact").parallax("20%", 20);
  }
  initParallax();

  $("[data-trigger]").on("click", function () {
    var trigger_id = $(this).attr("data-trigger");
    $(trigger_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });

  // close button
  $(".btn-close").on("click", function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
})(jQuery);
