function usernameValidation() {
    var username = document.getElementById("username").value
    // console.log(username)
    if (!username.match(/^[a-z]/)) {
        displayMsg('username-error', "username must start with alphabet", 'red')
        return false;
    }
    else if (username.length < 4) {
        displayMsg('username-error', "username should not be less than 4 character", 'red')
        return false;
    }
    else {
        displayMsg("username-error", 'valid username', 'green')
        return true;
    }
}

function passwordValidation() {
    var password = document.getElementById("password").value;
    if (!password.match(/[a-z]/)) {
        displayMsg("password-error", 'password must contain atleast one lowercase alphabet', 'red')
        return false;
    }
    else if (!password.match(/[A-Z]/)) {
        displayMsg("password-error", 'password must contain atleast one uppercase alphabet', 'red')
        return false;
    }
    else if (!password.match(/[0-9]/)) {
        displayMsg("password-error", 'password must contain atleast one number', 'red')
        return false;
    }
    else if (!password.match(/[!@#$%^&*()\-]/)) {
        displayMsg("password-error", 'password must contain atleast one special character', 'red')
        return false;
    }
    else if (password.length < 8) {
        displayMsg("password-error", 'password must contain minimum 8 character', 'red')
        return false;
    }
    else if (password.length > 8 && password.length < 15) {
        displayMsg("password-error", 'medium password', 'green')
        return true;
    }
    else if (password.length > 15 && password.length <= 30) {
        displayMsg("password-error", 'strong password', 'green')
        return true;
    }
    else if (password.length > 30) {
        displayMsg("password-error", 'password must contain less than 30 character', 'red')
        return false;
    }
    else {
        // displayMsg("")
    }
}

function emailValidation() {
    var email = document.getElementById("email").value;
    if (!email.match(/^[a-z]/)) {
        displayMsg('email-error', 'email must start with alphabet', 'red')
        return false;
    }
    else if (!email.match(/(@gmail.com)$/)) {
        displayMsg("email-error", 'email must end with @gmail.com', 'red')
        return false;
    }
    else {
        displayMsg("email-error", 'valid email', 'green')
        return true;
    }
}

function formValidation() {
    if ((usernameValidation() && passwordValidation() && emailValidation())==true) {
        return true;
    }
    else {
        return false;
    }
}


function displayMsg(id, msg, color) {
    document.getElementById(id).innerHTML = msg
    document.getElementById(id).style.color = color
}