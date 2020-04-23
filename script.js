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
        testQuestion1: "when was Michelangelo's birthday",

        answers: {
            a: "March 6",
            b: "Decemeber 27",
            c: "June 18",
        },
        correctAnswer: "a"
    },
    {
        testQuestion2: "when was Vincent Van Gogh's birthday",
        answers: {
            a: "March 8",
            b: "March 30",
            c: "December 3"
        },
        correctAnswer: "b"
    },
    {
        testQuestion3: "when was Thomas Degeorge's birthday?",
        answers: {
            a: "May 6",
            b: "October 8",
            c: "July 28"
        },
        correctAnswer: "b"
    },
    {
        testQuestion4: "when was Jacques-Loius David's birthday",
        answers: {
            a: "June 19",
            b: "August 30",
            c: "April 14"
        },
        correctAnswer: "b"
    },
    {
        testQuestion5: "when was Jacopo Vignali's birthday",
        answers: {
            a: "October 22",
            b: "Novermber 12",
            c: "September 5",
        },
        correctAnswer: "c"
    }
]

var clickBtn = document.querySelector("#clickBtn");
var initQuestion = document.querySelector("#startQuiz").appendChild(document.createElement("div"))



clickBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var startQuiz = document.getElementById("startQuiz")
    var answer1 = testQuestions[0].answers.a
    var answer2 = testQuestions[1].answers.b
    var answer3 = testQuestions[2].answers.b
    var answer4 = testQuestions[3].answers.b
    var answer5 = testQuestions[4].answers.c
    var testQuestion1_1 = JSON.stringify(testQuestions[0].answers.a)
    var testQuestion1_2 = JSON.stringify(testQuestions[0].answers.b)
    var testQuestion_3 = JSON.stringify(testQuestions[0].answers.c)



    startQuiz.removeChild(startQuiz.children[0])


    var item = document.createElement("div");
    item.textContent = testQuestion1;
    startQuiz.append(item);

    var initQuestion = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    initQuestion.textContent = testQuestion1

    JSON.stringify

    console.log(testQuestion1)

    addEventListener("click", function () {

    })

    addEventListener("click", function () {

    })

    addEventListener("click", function () {

    })

    addEventListener("click", function () {

    })

    addEventListener("click", function () {

    })

    var question1 = function () {
        var item = document.createElement("div");
        item.textContent = testQuestion1;
        startQuiz.append(item);

    }







})

if (testQuestions[0].answers.a === true) {

} else {

}

if (testQuestions[1].answers.b === true) {

} else {

}

if (testQuestions[2].answers.b === true) {

} else {

}
if (testQuestions[3].answers.b === true) {

} else {

}
if (testQuestions[4].answers.c === true) {

} else {

}


