const navbar = document.querySelector(".navbar");
const navbar_col = document.querySelector(".navbar-collapse");
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#bd3005";
    // navbar.style.backgroundColor = "rgb(6, 139, 60)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
};

// setTimeout(() => {
//   document.querySelector("#start").style.transform = "scaleY(0)";
// }, 0);

document.querySelector("#start").style.transform = "scaleY(0)";

(function ($) {
  function initParallax() {
    $("#intro").parallax("60%", 100);
    $("#about").parallax("100%", 80);
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

let map1, map2;
const iitg = { lat: 26.1878, lng: 91.6916 };
const map_id = "d49d706b6a5402b5";
function initMap() {
  map1 = new google.maps.Map(document.getElementById("map"), {
    center: iitg,
    zoom: 14,
    mapId: map_id,
    fullscreenControl: false,
    gestureHandling: "auto",
    scrollwheel: false,
  });

  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: iitg,
    zoom: 14,
    fullscreenControl: false,
    gestureHandling: "auto",
    scrollwheel: false,
  });

  const marker1 = new google.maps.Marker({
    position: iitg,
    map: map1,
  });
  const marker2 = new google.maps.Marker({
    position: iitg,
    map: map2,
  });
}

document.querySelector("#map_btn").addEventListener("click", () => {
  let map_disp = document.querySelector("#map");
  let contact = document.querySelector("#contact");
  console.log(map_disp.style.display);
  if (map_disp.style.display === "" || map_disp.style.display === "block") {
    map_disp.style.display = "none";
    contact.style.display = "none";
    document.querySelector("#map_btn").textContent = "Switch to Contact Us";
    // contact.style.background = "rgb(255,255,255,0.0)";
  } else {
    map_disp.style.display = "block";
    contact.style.display = "block";
    document.querySelector("#map_btn").textContent = "Switch to Map";
    console.log(map2.center);
    // contact.style.background = "rgb(0,0,0,0.7)";
  }
});

// $(function () {
//   $("a[href*=#]").bind("click", function (e) {
//     e.preventDefault(); // prevent hard jump, the default behavior

//     var target = $(this).attr("href"); // Set the target as variable

//     // perform animated scrolling by getting top-position of target-element and set it as scroll target
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $(target).offset().top,
//         },
//         600,
//         function () {
//           location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         }
//       );

//     return false;
//   });
// });

// $(window)
//   .on("scroll", function () {
//     var scrollDistance = $(window).scrollTop();

//     // Show/hide menu on scroll
//     //if (scrollDistance >= 850) {
//     //		$('nav').fadeIn("fast");
//     //} else {
//     //		$('nav').fadeOut("fast");
//     //}

//     // Assign active class to nav links while scolling
//     $(".page-section").each(function (i) {
//       if ($(this).position().top <= scrollDistance) {
//         $(".navigation a.active").removeClass("active");
//         $(".navigation a").eq(i).addClass("active");
//       }
//     });
//   })
//   .on("scroll");
