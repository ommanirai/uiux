/*
iife
immediately invoked functional expression
syntax:
()()

*/
function welcome(){
    console.log("Welcome")
}

// (welcome)()
// welcome()
(function(){
    console.log("i am anynamous function")
    console.log("i am taking help of iife to get execute")
})()