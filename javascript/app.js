
var totalSeconds = 60*0.5;
var minutes = parseInt(totalSeconds/60);
var seconds = parseInt(totalSeconds%60);

function timer() {
  $("#quiz-time-left").text('Time Left: ' + minutes + ' minutes ' + seconds + ' seconds');
  if(totalSeconds <=0) {
    check();
  } else{
    totalSeconds = totalSeconds - 1;
    minutes = parseInt(totalSeconds/60);
    seconds = parseInt(totalSeconds%60);
  setTimeout("timer()", 1000);
  }
};

function newWindow() 
{
    window.location.href = "Quiz.html";
}

$("#startButton").click(function() {
  newWindow();
});

timer();

function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0;

    if (question1  == "Blue Heeler") {
      correct++;
    }

    if (question2  == "2 years") {
      correct++;
    }

    if (question3  == "Socks") {
      correct++;
    }

    if (question4  == "Any Food") {
      correct++;
    }

  var messages = ["Great Job! You must be a Bowie Super Fan!", "You did so so...you could classify yourself as an acquaintance of Bowie", "Bowie is dissapointed in you"];
  var pictures = ["images/win.jpg", "images/meh.jpg", "images/lose1.jpg"];
  var range;
    if (correct < 2) {
      range = 2;
    }
    if (correct > 0 && correct < 4) {
      range = 1;
    }
    if (correct > 3){
      range = 0;
    }
  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
  
  if (totalSeconds <=0) {
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  }
}


