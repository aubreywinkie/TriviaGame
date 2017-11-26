
$("#startButton").click(function() {
  $("#splashScreen").hide();
  $("gameCanvas").show();
});

var totalSeconds = 60*0.5;
var minutes = parseInt(totalSeconds/60);
var seconds = parseInt(totalSeconds%60);

function timer() {
  $("#quiz-time-left").text('Time Left: ' + minutes + ' minutes ' + seconds + ' seconds');
  if(totalSeconds <=0) {
    setTimeout(function(){ alert("Times Up!"); }, 1);
    // setTimeout('document.quiz.submit()', 1);
  } else{
    totalSeconds = totalSeconds - 1;
    minutes = parseInt(totalSeconds/60);
    seconds = parseInt(totalSeconds%60);
  setTimeout("timer()", 1000);
  }
};

$("#startButton").click(function() {
  timer();
});

// setTimeout("timer()", 1000);


  $(".test").on('click', function() {
    if($(this).val() == 'ans') {
      alert("Correct Answer!")
    } else {
      alert("Wrong Answer")
      
    }
    });

