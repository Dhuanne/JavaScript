// To get score
function check() {
    var score = 0;

    // Elimination
    var q1=document.softEngMultipleChoice.question1.value;
    var q2=document.softEngMultipleChoice.question2.value;
    var q3=document.softEngMultipleChoice.question3.value;
    var q4=document.softEngMultipleChoice.question4.value;
    var q5=document.softEngMultipleChoice.question5.value;
    var q6=document.softEngMultipleChoice.question6.value;
    var q7=document.softEngMultipleChoice.question7.value;
    var q8=document.softEngMultipleChoice.question8.value;
    var q9=document.softEngMultipleChoice.question9.value;
    var q10=document.softEngMultipleChoice.question10.value;

    // If true add score
    if (q1 == "Use-based development") {score++}
    if (q2 == "Object-Based Development Model") {score++}
    if (q3 == "Software does “wear out”") {score++}
    if (q4 == "None of the above") {score++}
    if (q5 == "Last explicit process model") {score++}
    if (q6 == "None of the above") {score++}
    if (q7 == "Less effective than waterfall model") {score++}
    if (q8 == "Increase rework in the development process") {score++}
    if (q9 == "Delayed error elimination") {score++}
    if (q10 == "None of the above") {score++}

    // Score
    document.write(score);
}