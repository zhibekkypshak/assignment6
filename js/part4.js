$(document).ready(function () {
  const start = { left: 10, top: 10, width: 60, height: 60, opacity: 1 };

  // Task 8. Basic Animation
  $("#anim1").click(function () {
    $("#box1").animate({ width: "140px", height: "140px", left: "300px", top: "60px" }, 1000);
  });
  $("#reset1").click(function () {
    $("#box1").stop(true).animate(start, 500);
  });

  // Task 9. Sequential Animations
  $("#anim2").click(function () {
    $("#box2")
      .animate({ left: "400px" }, 800)
      .animate({ top: "170px" }, 800)
      .animate({ width: "30px", height: "30px" }, 800)
      .animate(start, 800);
  });

  // Task 10. Combined Animation
  $("#anim3").click(function () {
    $("#box3").animate({
      opacity: 0.3,
      width: "150px",
      height: "150px",
      left: "350px",
      top: "50px"
    }, 1500);
  });
  $("#reset3").click(function () {
    $("#box3").stop(true).animate(start, 500);
  });
});