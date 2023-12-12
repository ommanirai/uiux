/*
function
=> function is reusable block of code which perform specific task
syntax:

// function declaration, initialization
function function_name(){
    // body of function
}

// function call
function_name()

types of function:
1. named function
2. function with argument
3. function with return type
4. anynamous/unnamed function
5. IIFE(immediately invoked functional expression)

*/
// function welcome(){
//     // name is parameter
//     console.log("Good Morning !!!")
// }

function sum(){
    var n1 = 10
    var n2 = 23;
    var sum = n1 + n2;
    console.log(sum)
    // return sum;
}
// sum()

// welcome()
// welcome()
// welcome()
// welcome()
// welcome()

// function with argument
function welcome(details){
// function welcome(name, address, email, phone, status, id, gender){
    // name is parameter
    // console.log("what comes in details: ", details)
    // console.log("Good Morning "+name+" !!!")
    // var greetingText = "Hello " + name + ", welcome to "+ address + " ypur email: "+email+ " your phone:  "+phone + " your status: "+status+ " your id and gender "+id+ " " + gender;
    var greetingText = "Hello " +details.name + ", welcome to "+ details.address + " ypur email: "+details.email+ " your phone:  "+details.phone + " your status: "+details.status+ " your id and gender "+details.id+ " " + details.gender;
    
    console.log(greetingText)
}
// var your_name = prompt("enter your name")
var details = {
    name: 'ram',
    email: 'ram@gmail.com',
    phone: '8723432423',
    status: 'online',
    id: 122,
    gender: 'male',
    address: 'vedu',
}

// welcome('ram', 'vedu', 'ram@gmail.com', '9284234234', 'online', 12, 'male')
// welcome(details)


var det_array = ['ram', 'vedu', 8712423]
var fruits = ['apple', 'grapes']

function greetingText(det){
    // console.log(det_array[0])
    // console.log('what comes in ', det)
    var text = 'hi '+det[0] + 'welcome to ' + det[1]
    console.log(text)
}

greetingText(det_array)
greetingText(fruits)
// greetingText(['ram', 'vedu', 8712423])