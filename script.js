// Software Engineering Fill in the Blanks


// Software Engineering Multiple Choice
const quizDataMC = [
    {       // Multiple Choice
            // 1st Question
            question: "Which of the following is NOT included in Generic Process Models?",
            a: "Waterfall model",
            b: "Evolutionary development",
            c: "Formal systems development",
            d: "Use-based development",
            e: "None of the above",
            correct: "d", 
        },
        {
            // 2nd Question
            question: "Which of the following is NOT included in Specific Process Models?",
            a: "Incremental model",
            b: "Object-Based Development Model",
            c: "Spiral Development Model",
            d: "Package-Based Development Model",
            e: "None of the above",
            correct: "b",
        },
        {
            // 3rd Question
            question: "Which of the following is NOT included in Characteristics of Software?",
            a: "Software does “wear out”.",
            b: "Software is abstract and intangible.",
            c: "Software is developed or engineered; it is not manufactured in the classical sense.",
            d: "Most software is custom-built, rather than being assembled from existing components.",
            e: "None of the above",
            correct: "a",
        },
        {
            // 4th Question
            question: "Which of the following is NOT included in Fundamental Process Activities of Software Process?",
            a: "Specification",
            b: "Development",
            c: "Validation",
            d: "Evolution",
            e: "None of the above",
            correct: "e",
        },
        {
            // 5th Question
            question: "Which of the following is NOT an advantage of the Waterfall Model?",
            a: "Very clear from a managerial viewpoint - easy to model, plan, monitor, and understand",
            b: "Many existing tools support this model",
            c: "Development is relatively slow and deliberate and thus, results in solid, well-constructed systems",
            d: "Last explicit process model",
            e: "None of the above",
            correct: "d",
        },
        {
            // 6th Question
            question: "Which of the following is NOT a description of Waterfall model",
            a: "Linear sequential model",
            b: "Describe a set of clear stages in the development process",
            c: "Based on engineering practice",
            d: "Still used for large systems engineering projects",
            e: "None of the above",
            correct: "e",
        },
        {
            // 7th Question
            question: "Which of the following is NOT a disadvantage of Evolutionary Development?",
            a: "Cost, time, and resource estimation is difficult",
            b: "Process is not visible",
            c: "Progress is difficult to measure",
            d: "Less effective than waterfall model",
            e: "None of the above",
            correct: "d",
        },
        {
            // 8th Question
            question: "Which of the following is NOT a description of Incremental model?",
            a: "Suggested by Mills 1980",
            b: "In between waterfall and evolutionary",
            c: "Increase rework in the development process",
            d: "Give customers opportunity to delay decisions",
            e: "None of the above",
            correct: "c",
        },
        {
            // 9th Question
            question: "Which of the following is NOT an advantage of Spiral Development Model?",
            a: "Delayed error elimination",
            b: "Puts quality objectives up front",
            c: "Integrates development and maintenance",
            d: "Provides a framework for simultaneous hardware/software development",
            e: "None of the above",
            correct: "a",
        },
        {
            // 10th Question
            question: "Which of the following is NOT included in best practices for Rational Unified Process?",
            a: "Develop software iteratively",
            b: "Manage requirements",
            c: "Component based architecture",
            d: "Visually model software",
            e: "None of the above",
            correct: "e",
        },
    
    ];
    
    const quiz= document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const e_text = document.getElementById('e_text')
    const submitBtn = document.getElementById('submit')
    
    
    let currentQuiz = 0
    let score = 0
    
    loadQuiz()
    
    function loadQuiz() {
    
        deselectAnswers()
    
        const currentQuizData = quizDataMC[currentQuiz]
    
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
        e_text.innerText = currentQuizData.e
    }
    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        let answer
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
        return answer
    }
    
    
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()
        if(answer) {
           if(answer === quizDataMC[currentQuiz].correct) {
               score++
           }
    
           currentQuiz++
    
           if(currentQuiz < quizDataMC.length) {
               loadQuiz()
           } else {
               quiz.innerHTML = `
               <h2>You answered ${score}/${quizDataMC.length} questions correctly</h2>
    
               <button onclick="location.reload()">Reload</button>
               `
           }
        }
    })