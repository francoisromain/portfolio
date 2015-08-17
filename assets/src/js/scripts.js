$(document).ready(function () {
  if ($("#project-glide").length > 0) {
    // animation on the project page
    // 1. opening "showcase" div
    $("#project-glide").velocity({
      height: 512
    }, {
      delay: 1000,
      easing: "ease-out",
      complete: function (e1) {
        // 2. fadein on slideshow image 
        $("#project-glide img").velocity("fadeIn", {
          duration: 1000,
          complete: function (e2) {
            // 3. show buttons and bullets
            console.log(e1, e2);
            $(".glide__arrows, .glide__bullets").velocity("fadeIn", {
              duration: 200
            });
          }
        });
      }
    });

    $("body").on("click", "a", function (e) {
      e.preventDefault();
      var href = $(this).attr('href');
      $("#project-glide img, .glide__arrows, .glide__bullets").velocity("fadeOut", {
        duration: 200,
        complete: function () {
          // 3. show buttons and bullets
          $("#project-glide").velocity({
            height: 0
          }, {
            complete: function () {
              window.location = href;
            }
          });
        }
      });
    });
  }

  

  $("#project-glide").glide({
    type: "carousel",
    autoplay: false
  });
});
