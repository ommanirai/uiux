function usernameValidation(){
    var username = document.getElementById("username").value
    // console.log(username)
    if(!username.match(/^[a-z]/)){
        // document.getElementById("username-error").innerHTML = "username must start with alphabet"
        // document.getElementById("username-error").style.color = 'red'
        displayMsg('username-error', "username must start with alphabet", 'red')
    }
    else if(username.length < 4){
        document.getElementById("username-error").innerHTML = "username should not be less than 4 character"
        document.getElementById("username-error").style.color = 'red'
    }
    else{
        document.getElementById("username-error").innerHTML = "valid username"
        document.getElementById("username-error").style.color = 'green'
    }
}
function displayMsg(id,msg, color){
    
}