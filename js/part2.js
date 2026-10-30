$(document).ready(function () {
  // Task 2. Visibility Methods
  $("#hideBtn").click(function () { $("#para").hide(500); });
  $("#showBtn").click(function () { $("#para").show(500); });
  $("#toggleBtn").click(function () { $("#para").toggle(500); });

  // Task 3. Fade Methods
  $("#fadeInBtn").click(function () { $("#fadeImg").fadeIn(800); });
  $("#fadeOutBtn").click(function () { $("#fadeImg").fadeOut(800); });
  $("#fadeToggleBtn").click(function () { $("#fadeImg").fadeToggle(800); });

  // Task 4. Slide Methods
  $("#slideUpBtn").click(function () { $("#panel").slideUp(500); });
  $("#slideDownBtn").click(function () { $("#panel").slideDown(500); });
  $("#slideToggleBtn").click(function () { $("#panel").slideToggle(500); });
});