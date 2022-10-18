// To get score
function check() {
    var score = 0;

    // Identification




    // Elimination
    var q1=document.softEngElimination.question1.value;
    var q2=document.softEngElimination.question2.value;
    var q3=document.softEngElimination.question3.value;
    var q4=document.softEngElimination.question4.value;
    var q5=document.softEngElimination.question5.value;
    var q6=document.softEngElimination.question6.value;
    var q7=document.softEngElimination.question7.value;
    var q8=document.softEngElimination.question8.value;
    var q9=document.softEngElimination.question9.value;
    var q10=document.softEngElimination.question10.value;

    // If true add score

    // Identification


    // Elimination
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
    document.write("Your score is: " + score);
}