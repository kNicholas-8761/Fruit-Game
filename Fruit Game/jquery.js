var playing = false;

$(function () {
  //click on start reset button

  $("#startreset").click(function () {
    if (playing == true) {
      //reload page
      location.reload();
    } else {
      //we are not playing
      playing = true; //game initiated
    }
  });
});
