var tabata = function tabata (){

  //get init values from form
  var $setCount = $("#sets").val();
  var $periodCount = $("#interval").val();
  var $restCount = $("#restPeriod").val();
  //get timer fields
  var $setStart = $("#set-count");
  var $intervalStart = $("#interval-count");
  var $restStart = $("#rest-count");

  var timerInterval,restInterval;
  var self = this;
  this.getInitValues = function() {
    initValues = {
      setCount: $("#sets").val(),
      periodCount: $("#interval").val(),
      restCount: $("#restPeriod").val()
    }
    return initValues;
  }


  $setStart.html($setCount);
  $intervalStart.html($periodCount);
  $restStart.html($restCount);
  this.periodTick = $periodCount;
  this.restTick = $restCount;
  this.running = false;
  this.countdown = function(){
    console.log(this.running);
    this.running = true;
    self.periodTick = $periodCount;
    // periodTick = $periodCount;
    // $intervalStart.html($periodCount);
    timerPeriod = setInterval(self.counterInterval,1000);
    // this.counterInterval();
  }
  this.counterInterval = function() {
    // console.log(self.periodTick);

    if(self.running){
      $intervalStart.html(self.periodTick);

      self.periodTick --;
      if(self.periodTick < 0){
        clearInterval(timerPeriod);
        self.counterRest();
      }
    }else{
      clearInterval(timerPeriod);
    }


  }.bind(this);
  this.counterRest = function(){

    self.restTick = $restCount;
    $restStart.html($restCount);
    restInterval = setInterval(self.timerRest,1000);
  }

  this.timerRest = function(){
    if(self.running){
      $restStart.html(self.restTick);
      self.restTick--;
      if(self.restTick < 0){

        if($setCount > 1){
          $setCount--;
          $setStart.html($setCount);
          clearInterval(restInterval);
          self.countdown();
        }
        $setStart.html('Done!');
        clearInterval(restInterval);
      }
    }else{
      clearInterval(restInterval);
    }


  }
  this.stopTimer = function(){
    clearInterval(timerInterval),
    clearInterval(restInterval)
  }
}

$(".button-start").on('click',function(e){
    var timer = new tabata();
  // timer.countdown();
  if(timer.running){
    timer.running = false;
  }else {
    timer.running = true;

    timer.countdown();
  }
  // timer.countdown();
  $('.button-stop').on('click',function(){
    console.log(timer.running);
    timer.running = false;
  })

})
