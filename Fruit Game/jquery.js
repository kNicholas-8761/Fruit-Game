var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
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

      //show trials left

      $("#trialsLeft").show();
      trialsLeft = 3;
      addHearts();

      //change button text to reset game
      $("#startreset").html("Reset Game");
    }
  });
  function addHearts() {
    for (i = 0; i < trialsLeft; i++) {
      $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
  }
  //start sending fruits

  function startAction() {
    $("#fruit1").show();
  }

// generate a random fruit
  function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');   
}

});
