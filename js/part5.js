$(document).ready(function () {
  // Task 11. Mini Project: Accordion Menu
  $(".acc-head").click(function () {
    const body = $(this).next(".acc-body");
    $(".acc-body").not(body).slideUp(300);
    body.slideToggle(300);
  });
});