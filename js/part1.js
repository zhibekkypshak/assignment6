$(document).ready(function () {
  // Task 0. Setup
  console.log("jQuery is ready!");

  // Task 1. Selectors & CSS
  $("#btnText").click(function () {
    $("#title").text("Title changed with text()");
    $(".text").text("Text changed with text()");
  });

  $("#btnHtml").click(function () {
    $("#title").html("<em>Title changed with html()</em>");
    $("p").html("<strong>Bold text</strong> inserted with html()");
  });

  $("#btnCss").click(function () {
    $("#title").css({ color: "#e74c3c", "font-size": "32px" });
    $(".text").css("background-color", "#f9e79f");
    $("p").css("padding", "10px");
  });

  $("#btnReset").click(function () {
    location.reload();
  });
});