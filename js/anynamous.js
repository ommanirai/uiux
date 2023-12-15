// var x;
function welcome(){
    console.log("Welcome!!!")
}
/*
syntax:
function(){
    // body of function
}
*/
// welcome()
// x()

var x = function(){
    console.log("i am anynamous function")
}
// console.log(typeof(x))
// hoisting => hoisting is a mechanism which moves all the declaration at top before execution

// callback
// setTimeout(function(){
//     console.log("Namaste")
// }, 5000)
var i = 1
var a = setInterval(function(){
    // console.log("Good Morning boys!!!")
    if(i==10){
        clearInterval(a)
    }
    console.log(i)
    i++
}, 1000)
