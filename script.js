// Validates Admin Login
function teacherValidate() {
    //gets the admin element
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") { //Default pass and username of the teacher
        window.location.href = "scores.html"
    } else {// if wrong there will be warning pop-up
        alert("login failed");
    }

}
// Validates Student, lets the student choose whatever subject he/she wants to take
function studentValidate() {
    window.location.href = "/questions/sequestions.html"
}
function studentValidates() {
    window.location.href = "/questions/nmquestions.html"
}
