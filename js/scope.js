/*
application data => variable, function, constant

scope:
scope is accessibility of application data

types of scope:
1. global scope
2. functional/local scope
3. block scope

*/
/*
1. global scope
=> declare in outermost layer
=> accessible within a file

*/
// var name = 'Ram'
// function welcome(){
//     var address = 'Lalitpur'
//     // console.log(name)
//     // console.log(address)
// }
// welcome()
// console.log(name)
// console.log(address)
/*
2. functional/local scope
=> declare within a function
=> accessible within a function
=> var maintain functional/local scope
*/
// var location = 'Lalitpur'
// function greetingText(person){
//     location = 'Kathmandu'
//     console.log('hi ', person, "welcome to ", location)
// }
// greetingText('Rahul')
// console.log(location)
// console.log(person)

/*
3. block scope
=> declare within a block
=> accessible within a block
=> let maintain block scope

block
{

}
*/

var msg = 'hi'
var text = 'Good morning'
if(msg){
    let names = 'Ram'
    let text = msg + name
    console.log(text)
}
else{
    var name = 'Shyam'
    let text = msg + name
    console.log(text)
}
console.log(text)
console.log(names)
// name