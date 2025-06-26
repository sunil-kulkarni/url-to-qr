
$("#generate").on("click", function () {
  const url = $("#input").val().trim();
  if (!url) {
    alert("Please enter a URL");
    return;
  }

  $(this).css("backgroundColor", "");
  setTimeout(() => {
    $(this).css("backgroundColor", "");
  }, 100);

  $.post("/generate", { text: url }, function () {
    const newImage = "qr_image.png?ts=" + new Date().getTime(); 
    $("#qr-img").attr("src", newImage);
  });
});

