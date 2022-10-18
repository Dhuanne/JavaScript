// Variables
// var eliminationScore = 0;
// var allScore = identificationScore + eliminationScore;

// To get score
function checkIdentification(identificationScore) {
    // Score Variable
    var identificationScore = 0;

    // Identification
    var q1Identification = document.getElementById("q1").value;
    var q2Identification = document.getElementById("q2").value;
    var q3Identification = document.getElementById("q3").value;
    var q4Identification = document.getElementById("q4").value;
    var q5Identification = document.getElementById("q5").value;
    var q6Identification = document.getElementById("q6").value;
    var q7Identification = document.getElementById("q7").value;
    var q8Identification = document.getElementById("q8").value;
    var q9Identification = document.getElementById("q9").value;
    var q10Identification = document.getElementById("q10").value;

    // Checking Identification
    if (q1Identification == "Prototype") {identificationScore++}
    if (q2Identification == "Mockup") {identificationScore++}
    if (q3Identification == "Evolutionary Prototyping") {identificationScore++}
    if (q4Identification == "Design") {identificationScore++}
    if (q5Identification == "Software Design") {identificationScore++}
    if (q6Identification == "Architectural Design") {identificationScore++}
    if (q7Identification == "Throwaway Prototyping") {identificationScore++}
    if (q8Identification == "Repository") {identificationScore++}
    if (q9Identification == "Client-server") {identificationScore++}
    if (q10Identification == "Peer-to-peer") {identificationScore++}

    document.write("Your score is: " + identificationScore);

    location.href = "softwareEngingeeringElimination.html";
    return identificationScore;
}

// function print() {
//     document.write(identificationScore=checkIdentification());
// }

function check() {
    // Score variable
    var eliminationScore = 0;

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
    if (q1 == "Use-based development") {eliminationScore++}
    if (q2 == "Object-Based Development Model") {eliminationScore++}
    if (q3 == "Software does “wear out”") {eliminationScore++}
    if (q4 == "None of the above") {eliminationScore++}
    if (q5 == "Last explicit process model") {eliminationScore++}
    if (q6 == "None of the above") {eliminationScore++}
    if (q7 == "Less effective than waterfall model") {eliminationScore++}
    if (q8 == "Increase rework in the development process") {eliminationScore++}
    if (q9 == "Delayed error elimination") {eliminationScore++}
    if (q10 == "None of the above") {eliminationScore++}

    document.write("Your score is: " + eliminationScore);
}

function allScore() {
    var identificationScore = checkIdentification();
    var allScore = identificationScore + eliminationScore;
    // All score
    document.write("Your score is: " + allScore);
}