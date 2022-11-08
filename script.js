// Validates Admin Login
function teacherValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "scores.html"
    } else {
        alert("login failed");
    }

}
// Validates Student
function studentValidate() {
    window.location.href = "questions.html"
}