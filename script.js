
function teacherValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("login succesfully");
        return false;
    } else {
        alert("login failed");
    }
}
function studentValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.replaceAll(" ", "") == "" && password.replaceAll(" ", "") == "" || username.replaceAll(" ", "") == "" || password.replaceAll(" ", "") == "") {
        alert("Fill out all the required fields");
    } else{
        alert("login succesfully");
        window.location.href = "subject.html"
        return false;
    }

}
