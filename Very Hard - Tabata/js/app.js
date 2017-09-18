/*
VERY HARD:
Using jQuery, create a Tabata timer that has the following features:
1. Ask users how many sets they want to do
2. Ask users how long the activity in each set should be. Default to 20 seconds.
3. Ask users how long the rest period between each set should be. Default to 10 seconds.
4. Allow the user to start the timer once those questions have been answered.
5. Allow the user to stop the timer at any time after it has started.
6. Visually count down each activity period and then each rest period.
7. Make sure it is visually clear which period is currently being counted down.
8. If the user finishes all of the sets they created, congratulate them at the end.
9. Use CSS to make it look good on the desktop and also on a phone.
10. For extra credit use CSS or jQuery animations for the countdown.
*/

$('.button-stop').on('click',function(){
  console.log(timerInterval);
})

var $setStart = $("#set-count");
var $intervalStart = $("#interval-count");
var $restStart = $("#rest-count");

$(".button-start").on('click',function(e){
  //get input values
  var $setCount = $("#sets").val();
  var $periodCount = $("#interval").val();
  var $restCount = $("#restPeriod").val();


  $setStart.html($setCount);
  $intervalStart.html($periodCount);
  $restStart.html($restCount);

  var periodLoop = countdown($periodCount,true);
  console.log(periodLoop);
})

function countdown (periodCount,running) {
  if(running){
    var intervalTick = periodCount;
    $intervalStart.html(periodCount);
    var timerInterval = setInterval(counterInterval,1000);
    function counterInterval(){
      $intervalStart.html(intervalTick);
      intervalTick --;
      if(intervalTick < 0){
        clearInterval(timerInterval);
        counterRest();
      }
    }
  }else{
    clearInterval(timerInterval);
  }
}

function counterRest(){
  var restTick = $restCount;
  $restStart.html($restCount);
  var restInterval = setInterval(timerRest,1000);
  function timerRest(){
    $restStart.html(restTick);
    restTick--;
    if(restTick < 0){
      if($setCount > 0){
        $setCount--;
        $setStart.html($setCount);
        clearInterval(restInterval);
        countdown();
      }
      clearInterval(restInterval);
    }
  }

}
