// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let password = document.getElementById("password")
let id = (id) => document.getElementById(id);

let classess = (classess) => document.getElementsByClassName(classess);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classess("error"),
  successIcon = classess("success-icon"),
  failureIcon = classess("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username can't be blank");
  engine(email, 1, "Email can't be blank");
  engine(password, 2, "Password can't be blank");
});

let engine = (usersID, i, message) => {
  if (usersID.value.trim() === "") {
    errorMsg[i].innerHTML = message;
    successIcon[i].style.opacity = "0";
    failureIcon[i].style.opacity = "1";
  } else {
    errorMsg[i].innerHTML = "";
    failureIcon[i].style.opacity = "0";
    successIcon[i].style.opacity = "1";
  }
};
