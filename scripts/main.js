function openNav(){
	document.getElementById('nav').style.width = "250px";
}
function closeNav() {
	document.getElementById('nav').style.width = "0";
}

function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat:28.655822, lng: 77.367748},
            zoom: 17
        });
}

// var shiftWindow = function() { scrollBy(0, -150) };
// window.addEventListener("hashchange", shiftWindow);
// function load() { if (window.location.hash) shiftWindow(); }

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -130
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});



// function slide() {
// 	var wrapper = document.getElementsByClassName('wrapper');
//    $(wrapper).css({"position": "absolute","top": "60px"})
// }


// });

// $(document).ready(function(){
//  $(window).scroll(function(){
//  if($(window).scrollTop() > 900 &&
//  $(".nav").css("position") != "fixed"){
//  $(".nav").hide(function(){
//  $(".nav").css("position", "fixed")
//  $(".nav").slideDown('1000')
//  })
//  }else if($(window).scrollTop() <= 900 ){
//  $(".nav").css("position", "initial")
//  }
//  })
// })

