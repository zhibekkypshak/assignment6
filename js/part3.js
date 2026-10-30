$(document).ready(function () {
  // Task 5. Add & Remove Elements
  let count = 2;

  $("#appendBtn").click(function () {
    count++;
    $("#list").append("<li>Item " + count + "</li>");
  });

  $("#prependBtn").click(function () {
    count++;
    $("#list").prepend("<li>Item " + count + "</li>");
  });

  $("#removeBtn").click(function () {
    $("#list li:last").remove();
  });

    // Task 6. Modifying Attributes
  const images = [
    "https://picsum.photos/id/10/300/200",
    "https://picsum.photos/id/20/300/200",
    "https://picsum.photos/id/30/300/200"
  ];
  const links = [
    { href: "https://jquery.com", text: "Visit jQuery" },
    { href: "https://api.jquery.com", text: "Visit jQuery API" },
    { href: "https://learn.jquery.com", text: "Visit jQuery Learn" }
  ];
  let imgIndex = 0;
  let linkIndex = 0;

  $("#srcBtn").click(function () {
    imgIndex = (imgIndex + 1) % images.length;
    $("#pic").fadeOut(200, function () {
      $(this).attr("src", images[imgIndex]).fadeIn(200);
    });
  });

  $("#hrefBtn").click(function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#link").attr("href", links[linkIndex].href).text(links[linkIndex].text);
    $("#hrefText").text(links[linkIndex].href);
  });

  // Task 7. Form Interaction
  $("#name").on("input", function () { $("#outName").text($(this).val()); });
  $("#email").on("input", function () { $("#outEmail").text($(this).val()); });
});