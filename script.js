
function teacherValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "studentIndex.html"
    } else {
        alert("login failed");
    }
}

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

function studentValidate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "teacherIndex.html"
    } else {
        alert("login failed");
    }
}
