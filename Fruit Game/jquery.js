var playing = false;
var score;
$(function () {
  //click on start reset button

  $("#startreset").click(function () {
    if (playing == true) {
      //reload page
      location.reload();
    } else {
      //we are not playing
      playing = true; //game initiated

      //set score to 0
      score = 0; //set score to 0
      $("#scorevalue").html(score);
    }
  });
});
