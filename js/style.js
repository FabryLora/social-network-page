$(function () {
  $("#buttonLeftNav").click(function () {
    $("#buttonLeftNav").toggleClass("buttonLeftClicked");
    $(".left-nav-container").toggleClass("left-nav-container-animation");
    $("#blackScreen").toggleClass("black-screen");
  });

  $("#prevImage").hide();
  $("#nextImage").hide();

  $(".img-card-container").hover(
    function () {
      $("#prevImage").fadeIn("fast");
      $("#nextImage").fadeIn("fast");
    },
    function () {
      $("#prevImage").fadeOut("fast");
      $("#nextImage").fadeOut("fast");
    }
  );

  var photos = [
    "me.jpg",
    "minimal-bg.webp",
    "minimal-bg2.png",
    "minimal-dark-bg.webp",
  ];
  var i = 0;

  $("#nextImage").click(function () {
    if (i < photos.length - 1) {
      i += 1;
      var foto = photos[i];
    } else {
      var foto = photos[i];
    }
    $(".img-card-container").css({
      backgroundImage: `url('../img/bg/${foto}')`,
      transition: "400ms",
    });
  });

  $("#prevImage").click(function () {
    if (i > 0) {
      i -= 1;
      var foto = photos[i];
    } else {
      var foto = photos[i];
    }
    $(".img-card-container").css({
      backgroundImage: `url('../img/bg/${foto}')`,
    });
  });

  $("#bgOne").click(function () {
    $("body").css({
      backgroundImage: "url('../img/bg/minimal-bg.webp')",
      transition: "400ms",
    });
    $(".cards, .users-car").css({
      boxShadow: "0px 0px 10px #b624d5",
      transition: "400ms",
    });
  });

  $("#bgTwo").click(function () {
    $("body").css({
      backgroundImage: "url('../img/bg/minimal-bg2.png')",
      transition: "400ms",
    });
    $(".cards, .users-car").css({
      boxShadow: "0px 0px 10px #40f2fe",
      transition: "400ms",
    });
  });

  $("#bgThree").click(function () {
    $("body").css({
      backgroundImage: "url('../img/bg/minimal-dark-bg.webp')",
      transition: "400ms",
    });
    $(".cards, .users-car").css({
      boxShadow: "0px 0px 10px #fff",
      transition: "400ms",
    });
  });

  var heartBtnClicked = false;
  $("#heartBtn").click(function () {
    if (heartBtnClicked == false) {
      $("#heartBtn").html(
        "<span id='heartBtnSpan' class='mdi mdi-heart button-span'></span>"
      );
      $("#heartBtnSpan").css({
        color: "#FA383E",
      });
      heartBtnClicked = true;
    } else {
      $("#heartBtn").html(
        "<span id='heartBtnSpan' class='mdi mdi-heart-outline button-span'></span>"
      );
      heartBtnClicked = false;
    }
  });

  $(".img-card-container").dblclick(function () {
    if (heartBtnClicked == false) {
      $("#heartBtn").html(
        "<span id='heartBtnSpan' class='mdi mdi-heart button-span'></span>"
      );
      $("#heartBtnSpan").css({
        color: "#FA383E",
      });
      heartBtnClicked = true;
    } else {
      $("#heartBtn").html(
        "<span id='heartBtnSpan' class='mdi mdi-heart-outline button-span'></span>"
      );
      heartBtnClicked = false;
    }
  });

  var bookBtnClicked = false;
  $("#bookBtn").click(function () {
    if (bookBtnClicked == false) {
      $("#bookBtn").html("<span class='mdi mdi-bookmark button-span'></span>");
      bookBtnClicked = true;
    } else {
      $("#bookBtn").html(
        "<span class='mdi mdi-bookmark-outline button-span'></span>"
      );
      bookBtnClicked = false;
    }
  });
});
