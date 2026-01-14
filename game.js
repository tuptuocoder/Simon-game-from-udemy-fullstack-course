//alert("hello");

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on('keydown', function(event){
 if(!started){
   $("#level-title").text("Level "+ level);
   nextSequence();
   started = true;
 }
});

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playsound(userChosenColour);
    animatePress(userChosenColour); 
    // console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
});

//$(document).ready(function(){
    //defining a new function 
function checkAnswer(currentLevel){

  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    console.log("Success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
            nextSequence();
          }, 1000);
    }
  }

  else{
    console.log("Wrong");
    playsound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    $("#level-title").text(("Game Over, Press Any Key to Restart"));
    startOver();
  }

  //   var i =0;
  //  do{
  //   if(userClickedPattern[i]==gamePattern[i]){
  //     i++;
  //   }
  //  }while(gamePattern.length())

  //   if(i==gamePattern.length()){
  //     nextSequence();
  //   }
  //   else{

  //   }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+ level);
  //var randomNumber=Math.random();
  //randomNumber = randomNumber * 4;
  //randomNumber = Math.floor(randomNumber);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);        
  playsound(randomChosenColour);
  checkAnswer(level);
}

function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(btn){
  $("#" + btn).addClass("pressed");      
  setTimeout(function (){
    $("#" + btn).removeClass("pressed");
  },100);
}
//})
//if(randomChosenColour == buttonColours[0]){
  //  var $red = $('#red');
    //function flashElement(){
      //  $red.animate({opacity: 0.2}, 200).animate({opacity: 1}, 200, flashElement);
    //}
    //flashElement();
//}

//else if(randomChosenColour == buttonColours[1]){
    //var $blue = $('#red');
  //  $("button").click(function(){
    //    $('#blue').animate({opacity: 0.2},200,flashElement);
    //})
   
//}
