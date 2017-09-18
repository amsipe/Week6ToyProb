/*
EASY: Create a button that when you click on it, it toggles a message inside of a div. Using a condition that you create (hint: checking if a random number is of a certain value), toggle the message fast or slow.
If the condition is TRUE, toggle the message fast. If the condition is FALSE, toggle the message slow.
*/

$("button").on('click',function(e) {
  var randNum = Math.floor(Math.random() * 10) + 1;
  var $message = $("#message");
  if(randNum <= 5){
    //fade in/out quickly
    toggleElem($message,200);
  } else {
    //fade in/out slowly
    toggleElem($message,800);
  }
});

//function to check opacity and animate based on parameters
function toggleElem (ele,duration) {
  var elemOpac = ele.css("opacity");

  if(elemOpac == 1){
    ele.animate({opacity: 0},duration);
    ele.css("opacity",0);
  } else {
    ele.animate({opacity: 1},duration);
    ele.css("opacity",1);
  }

}
