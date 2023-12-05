/*
conditions in javascript
block => {

}
1. if
syntax:
if(condition){
    // body of if
}
var a = 6

condition:
truthy value => true, some defined value
falsy value => false, null, 0, undefined, " "

2. nested if
syntax:
if(condition1){
    if(condition2){

    }
}


3. if else
task:
a. check the number odd or even
b. check number is positive or negative
syntax:
if(condition){
    body of if
}
else{
    body of else
}

4. nested if else
task:
a. calculator
var a = 
var b = 
var symbol = prompt("enter symbol")
if(symbol == '+'){

}
else if (symbol == '-'){
    
}

syntax:
if(condition1){
    body of if
}
else if(condition2){
    condition 2
}
else if(condition3){
    body of condition 3
}
.
.
.
.
else if(conditionN){
    body of condiiton N
}
else{
    body of else
}


5. switch
*/

// if
var a = 23;
var b = 12;
if (0) {
    console.log(a, ' is less than ', b)
}

if (a == b) {
    console.log("iam ram")
    if (a > b) {
        console.log("name: ram, address: Vedu")
    }
}

// 22
// 3 7
var n = 21
var a = 3
var b = 7

if (n % a == 0 || n % b == 0) {
    if (n % a == 0 && n % b == 0) {
        console.log(n, 'is divisible by both ', a, ' and ', b)
    }

    if (n % a == 0) {
        console.log(n, 'is divisible by ', a)
    }
}