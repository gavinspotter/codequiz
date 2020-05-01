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

        answers: [
            "March 6",
            "Decemeber 27",
            "June 18",
        ],
        correctAnswer: "a"
    },
    {
        testQuestion: "when was Vincent Van Gogh's birthday",
        answers: [
            "March 8",
            "March 30",
            "December 3"
        ],
        correctAnswer: "b"
    },
    {
        testQuestion: "when was Thomas Degeorge's birthday?",
        answers: [
            "May 6",
            "October 8",
            "July 28"
        ],
        correctAnswer: "b"
    },
    {
        testQuestion: "when was Jacques-Loius David's birthday",
        answers: [
            "June 19",
            "August 30",
            "April 14"
        ],
        correctAnswer: "b"
    },
    {
        testQuestion: "when was Jacopo Vignali's birthday",
        answers: [
            "October 22",
            "Novermber 12",
            "September 5",
        ],
        correctAnswer: "c"
    }
]

var clickBtn = document.querySelector("#clickBtn");

var setTime = 80

var TOrF = document.querySelector(".TOrF")
var startQuiz = document.getElementById("startQuiz")



clickBtn.addEventListener("click", function (event) {
    event.preventDefault();

    startQuiz.removeChild(startQuiz.children[0])

    var timeInterval = document.querySelector(".timer")


    var cloc = setInterval(() => {
        setTime--;
        timeInterval.textContent = setTime + "seconds left"

        if (setTime === 0) {
            clearInterval(cloc)

        }
    }, 1000)

    q1fun()



})



var q1fun = () => {

    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[0].testQuestion

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {
        answerTrue()
        var itsTorF = setInterval(() => {
            q2fun();
            clearInterval(itsTorF)
            return
        }, 1500)

    })
    answer1.textContent = testQuestions[0].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {
        answerFalse()
        var itsTorF = setInterval(() => {
            q2fun();
            clearInterval(itsTorF)
            return
        }, 1500)
    })
    answer2.textContent = testQuestions[0].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {
        answerFalse();
        var itsTorF = setInterval(() => {
            q2fun();
            clearInterval(itsTorF)
            return
        }, 1500)


    })
    answer3.textContent = testQuestions[0].answers[2]


}



var q2fun = () => {
    startQuiz.textContent = ""
    TOrF.textContent = ""
    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[1].testQuestion

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {

        q3fun();
    })
    answer1.textContent = testQuestions[1].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {

        q3fun();
    })
    answer2.textContent = testQuestions[1].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {

        q3fun();

    })
    answer3.textContent = testQuestions[1].answers[2]


}

var q3fun = () => {

    startQuiz.textContent = ""
    TOrF.textContent = ""
    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[2].testQuestion

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {

        q4fun();
    })
    answer1.textContent = testQuestions[2].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {

        q4fun();
    })
    answer2.textContent = testQuestions[2].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {

        q4fun();

    })
    answer3.textContent = testQuestions[2].answers[2]

}

var q4fun = () => {

    startQuiz.textContent = ""
    TOrF.textContent = ""
    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[3].testQuestion

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {

        q5fun();
    })
    answer1.textContent = testQuestions[3].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {

        q5fun();
    })
    answer2.textContent = testQuestions[3].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {

        q5fun();

    })
    answer3.textContent = testQuestions[3].answers[2]

}

var q5fun = () => {

    startQuiz.textContent = ""
    TOrF.textContent = ""
    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[4].testQuestion

    var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }

    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {


    })
    answer1.textContent = testQuestions[4].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {


    })
    answer2.textContent = testQuestions[4].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {



    })
    answer3.textContent = testQuestions[4].answers[2]

}

var answerTrue = () => {
    TOrF.textContent = "True"
}

var answerFalse = () => {
    setTime -= 9
    TOrF.textContent = "False"


}





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



/*





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
var startQuiz = document.querySelector("#startQuiz")

var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }


clickBtn.addEventListener("click", function (event) {
    event.preventDefault();


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

        q2fun()
    })
    question1_3.textContent = testQuestions[0].answers[2]



})

var questionbr = () => { document.querySelector("#startQuiz").appendChild(document.createElement("br")) }


var

var q2fun = () => {

    startQuiz.textContent = ""
    var question = document.querySelector("#startQuiz").appendChild(document.createElement("div"))
    question.textContent = testQuestions[1].testQuestion2


    questionbr();

    var answer1 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer1.addEventListener("click", () => {
        true
    })
    answer1.textContent = testQuestions[1].answers[0]
    questionbr();

    var answer2 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer2.addEventListener("click", () => {
        false

    })
    answer2.textContent = testQuestions[1].answers[1]
    questionbr();

    var answer3 = document.querySelector("#startQuiz").appendChild(document.createElement("button"))
    answer3.addEventListener("click", () => {
        false

    })

    answer3.textContent = testQuestions[1].answers[2]

}
*/


