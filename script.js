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

        answers: [
            "March 6",
            "Decemeber 27",
            "June 18",
        ],
        correctAnswer: "a"
    },
    {
        testQuestion2: "when was Vincent Van Gogh's birthday",
        answers: [
            "March 8",
            "March 30",
            "December 3"
        ],
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

var setTime = 80

var TOrF = document.querySelector(".TOrF")

clickBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var startQuiz = document.getElementById("startQuiz")

    startQuiz.removeChild(startQuiz.children[0])

    var timeInterval = document.querySelector(".timer")


    var cloc = setInterval(() => {
        setTime--;
        timeInterval.textContent = setTime + "seconds left"

        if (setTime === 0) {
            clearInterval(cloc)

        }
    }, 1000)




    var question1q = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question1q.textContent = testQuestions[0].testQuestion1

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var question1_1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question1_1.addEventListener("click", () => {
        true
    })
    question1_1.textContent = testQuestions[0].answers[0]
    questionbr();

    var question1_2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question1_2.addEventListener("click", () => {
        false

    })
    question1_2.textContent = testQuestions[0].answers[1]
    questionbr();

    var question1_3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question1_3.addEventListener("click", () => {
        false
        if (question1_3) {
            threeSecInt()
            q2fun()

        }
    })
    question1_3.textContent = testQuestions[0].answers[2]


    var threeSecInt = setInterval(() => {
        TOrF.textContent = "False"

        clearInterval(threeSecInt)
        q2fun();
    }, 2000)


})

var q2fun = () => {
    var question2q = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question2q.textContent = testQuestions[1].testQuestion2

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var question1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question1_1.addEventListener("click", () => {
        true
    })
    question1.textContent = testQuestions[1].answers[0]
    questionbr();

    var question2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question2.addEventListener("click", () => {
        false

    })
    question2.textContent = testQuestions[1].answers[1]
    questionbr();

    var question3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    question3.addEventListener("click", () => {
        false
        if (question3) {
            threeSecInt()

        }
    })
    question1_3.textContent = testQuestions[1].answers[2]

}