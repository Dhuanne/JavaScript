/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "Which of the following is NOT included in Generic Process Models?",
            "options": [
                {
                    "a" : "Waterfall model",
                    "b" : "Evolutionary development",
                    "c" : "Formal systems development",
                    "d" : "Use-based development",
                    "e" : "None of the above",
                }
            ],
            "answer": "Use-based development",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following is NOT included in Specific Process Models?",
            "options": [
                {
                    "a" : "Incremental model",
                    "b" : "Object-Based Development Model",
                    "c" : "Spiral Development Model",
                    "d" : "Package-Based Development Model",
                    "e" : "None of the above",
                }
            ],
            "answer": "Object-Based Development Model",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "Which of the following is NOT included in Characteristics of Software?",
            "options": [
                {
                    "a" : "Software does “wear out”",
                    "b" : "Software is abstract and intangible",
                    "c" : "Software is developed or engineered; it is not manufactured in the classical sense",
                    "d" : "Most software is custom-built, rather than being assembled from existing components",
                    "e" : "None of the above",
                }
            ],
            "answer": "Software does “wear out”",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which of the following is NOT included in Fundamental Process Activities of Software Process?",
            "options": [
                {
                    "a" : "Specification",
                    "b" : "Development",
                    "c" : "Validation",
                    "d" : "Evolution",
                    "e" : "None of the above",
                }
            ],
            "answer": "None of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Which of the following is NOT an advantage of the Waterfall Model?",
            "options": [
                {
                    "a" : "Very clear from a managerial viewpoint - easy to model, plan, monitor, and understand",
                    "b" : "Many existing tools support this model",
                    "c" : "Development is relatively slow and deliberate and thus, results in solid, well-constructed systems",
                    "d" : "Last explicit process model",
                    "e" : "None of the above",
                }
            ],
            "answer": "Last explicit process model",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following is NOT an description of Waterfall model?",
            "options": [
                {
                    "a" : "Linear sequential model",
                    "b" : "Describe a set of clear stages in the development process",
                    "c" : "Based on engineering practice",
                    "d" : "Still used for large systems engineering projects",
                    "e" : "None of the above",
                }
            ],
            "answer": "None of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question":  "Which of the following is NOT a disadvantage of Evolutionary Development?",
            "options": [
                {
                    "a" : "Cost, time, and resource estimation is difficult",
                    "b" : "Process is not visible",
                    "c" : "Progress is difficult to measure",
                    "d" : "Less effective than waterfall model",
                    "e" : "None of the above",
                }
            ],
            "answer": "Less effective than waterfall model",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "Which of the following is NOT a description of Incremental model?",
            "options": [
                {
                    "a" : "Suggested by Mills 1980",
                    "b" : "In between waterfall and evolutionary",
                    "c" : "Increase rework in the development process",
                    "d" : "Give customers opportunity to delay decisions",
                    "e" : "None of the above",
                }
            ],
            "answer": "Increase rework in the development process",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which of the following is NOT an advantage of Spiral Development Model?",
            "options": [
                {
                    "a" : "Delayed error elimination",
                    "b" : "Puts quality objectives up front",
                    "c" : "Integrates development and maintenance",
                    "d" : "Provides a framework for simultaneous hardware/software development",
                    "e" : "None of the above",
                }
            ],
            "answer": "Delayed error elimination",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "Which of the following is NOT included in best practices for Rational Unified Process?",
            "options": [
                {
                    "a" : "Develop software iteratively",
                    "b" : "Manage requirements",
                    "c" : "Component based architecture",
                    "d" : "Visually model software",
                    "e" : "None of the above",
                }
            ],
            "answer": "None of the above",
            "score": 0,
            "status": ""
        },

    ]
}
var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');
            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }
    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
    }
    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        option = option.replace(/</g, "&lt;") //for <
        option = option.replace(/>/g, "&gt;") //for >
        option = option.replace(/"/g, "&quot;")
        if (option == quiz.JS[this.currentque].answer) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
        } else {
            quiz.JS[this.currentque].status = "wrong";
        }
    }
    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    }
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
        $(this).prop("checked", true);
        selectedopt = $(this).val();
    });
});
$('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
});