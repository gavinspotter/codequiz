// when the user first access the page, they are shown an intro message

//users can lcick the start button, which will start the game timer

// variables to store current count, set to 0 by default
// variable to store the array of questions
// variable to store the index of the current question they are answering
// - possible answers (list)
// - question
// - correct answer

//when the user clicks on start:
// - hide the intro <div>
// - create a setInterval of 75000 ms.
// every time the interval runs, we need to decrement the current count by 1, re-render the current coount
// - render the first question
// use dom manipulation, create new element

//once the game has started, display the first question with buttons for the answers

//when a user clicks on one of those questions determine if it is correct or incorrect, display the next question, and display the status of their answer (correct/incorrect), for a short period of time

//end coniditoin
//user answers all of the questions or
// time runs out

//when the game ends allow the user to enter their initials and store their score

//redirect the user to the highscores page, which will display all of the highscores

var testQuestions = [
  {
    testQuestion: "when was Michelangelo's birthday",

    answers: ["March 6", "Decemeber 27", "June 18"],
    correctAnswer: "a",
  },
  {
    testQuestion: "when was Vincent Van Gogh's birthday",
    answers: ["March 8", "March 30", "December 3"],
    correctAnswer: "b",
  },
  {
    testQuestion: "when was Thomas Degeorge's birthday?",
    answers: ["May 6", "October 8", "July 28"],
    correctAnswer: "b",
  },
  {
    testQuestion: "when was Jacques-Loius David's birthday",
    answers: ["June 19", "August 30", "April 14"],
    correctAnswer: "b",
  },
  {
    testQuestion: "when was Jacopo Vignali's birthday",
    answers: ["October 22", "Novermber 12", "September 5"],
    correctAnswer: "c",
  },
];

var clickBtn = document.querySelector("#clickBtn");

var setTime = 80;

var clocTime = false;

var TOrF = document.querySelector(".TOrF");
var startQuiz = document.getElementById("startQuiz");

clickBtn.addEventListener("click", function (event) {
  event.preventDefault();

  startQuiz.removeChild(startQuiz.children[0]);

  var timeInterval = document.querySelector(".timer");

  var cloc = setInterval(() => {
    setTime--;
    timeInterval.textContent = setTime + "seconds left";

    if (setTime === 0) {
      clearInterval(cloc);
    } else if (clocTime === true) {
      clearInterval(cloc);
    } else {
      console.log("yo");
    }
  }, 1000);

  q1fun();
});

var q1fun = () => {
  var question = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("div"));
  question.textContent = testQuestions[0].testQuestion;

  var questionbr = () => {
    document
      .querySelector("#startQuiz")
      .appendChild(document.createElement("br"));
  };

  questionbr();

  var answer1 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer1.addEventListener("click", () => {
    answerTrue();
    var itsTorF = setInterval(() => {
      q2fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer1.textContent = testQuestions[0].answers[0];
  questionbr();

  var answer2 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer2.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q2fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer2.textContent = testQuestions[0].answers[1];
  questionbr();

  var answer3 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer3.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q2fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer3.textContent = testQuestions[0].answers[2];
};

var q2fun = () => {
  startQuiz.textContent = "";
  TOrF.textContent = "";
  var question = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("div"));
  question.textContent = testQuestions[1].testQuestion;

  var questionbr = () => {
    document
      .querySelector("#startQuiz")
      .appendChild(document.createElement("br"));
  };

  questionbr();

  var answer1 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer1.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q3fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer1.textContent = testQuestions[1].answers[0];
  questionbr();

  var answer2 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer2.addEventListener("click", () => {
    answerTrue();
    var itsTorF = setInterval(() => {
      q3fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer2.textContent = testQuestions[1].answers[1];
  questionbr();

  var answer3 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer3.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q3fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer3.textContent = testQuestions[1].answers[2];
};

var q3fun = () => {
  startQuiz.textContent = "";
  TOrF.textContent = "";
  var question = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("div"));
  question.textContent = testQuestions[2].testQuestion;

  var questionbr = () => {
    document
      .querySelector("#startQuiz")
      .appendChild(document.createElement("br"));
  };

  questionbr();

  var answer1 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer1.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q4fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer1.textContent = testQuestions[2].answers[0];
  questionbr();

  var answer2 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer2.addEventListener("click", () => {
    answerTrue();
    var itsTorF = setInterval(() => {
      q4fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer2.textContent = testQuestions[2].answers[1];
  questionbr();

  var answer3 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer3.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q4fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer3.textContent = testQuestions[2].answers[2];
};

var q4fun = () => {
  startQuiz.textContent = "";
  TOrF.textContent = "";
  var question = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("div"));
  question.textContent = testQuestions[3].testQuestion;

  var questionbr = () => {
    document
      .querySelector("#startQuiz")
      .appendChild(document.createElement("br"));
  };

  questionbr();

  var answer1 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer1.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q5fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer1.textContent = testQuestions[3].answers[0];
  questionbr();

  var answer2 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer2.addEventListener("click", () => {
    answerTrue();
    var itsTorF = setInterval(() => {
      q5fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer2.textContent = testQuestions[3].answers[1];
  questionbr();

  var answer3 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer3.addEventListener("click", () => {
    answerFalse();
    var itsTorF = setInterval(() => {
      q5fun();
      clearInterval(itsTorF);
    }, 1500);
  });
  answer3.textContent = testQuestions[3].answers[2];
};

var q5fun = () => {
  startQuiz.textContent = "";
  TOrF.textContent = "";
  var question = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("div"));
  question.textContent = testQuestions[4].testQuestion;

  var questionbr = () => {
    document
      .querySelector("#startQuiz")
      .appendChild(document.createElement("br"));
  };

  questionbr();

  var answer1 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer1.addEventListener("click", () => {
    answerFalse();
    clocTime = true;
  });
  answer1.textContent = testQuestions[4].answers[0];
  questionbr();

  var answer2 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer2.addEventListener("click", () => {
    answerFalse();
    clocTime = true;
  });
  answer2.textContent = testQuestions[4].answers[1];
  questionbr();

  var answer3 = document
    .querySelector("#startQuiz")
    .appendChild(document.createElement("button"));
  answer3.addEventListener("click", () => {
    answerTrue();
    clocTime = true;
  });
  answer3.textContent = testQuestions[4].answers[2];
};

var answerTrue = () => {
  TOrF.textContent = "True";
};

var answerFalse = () => {
  setTime -= 9;
  TOrF.textContent = "False";
};

setTimeEnd;

var highScore = () => {
  startQuiz.textContent = "Your score is " + setTime;
};
