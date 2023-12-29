/*
es6
ecma script 6
1. object shorthand
2. object destruction
3. template literals
4. default argument
5. arrow notation function
6. rest operator
7. spread operator
8. 

*/
// object shorthand
var name = 'ram'
var address = 'Vedu'
var contact = '982342343'
var details = {
    name: name,
    a: address,
    contact
}
// console.log(details)

// object destruction
function displayDetails() {
    var fruits = ['mango', 'apple', 'kiwi']
    var veg = ['potato', 'tomato']
    return {
        fruits: fruits,
        veg: veg,
        a: 'a',
        b: 'b'
    };
}
var { fruits: fruit, veg } = displayDetails()
// console.log(fruit)
// console.log(veg)

// template literals
// + ,
// var text = 'hi '+name+ ' welcome to '+address
var text = `hi ${name} welcome to ${address}`
// console.log(text)

// default argument
var name = 'Shyam'
function welcome(name = 'man', address = "Vedu") {
    console.log(`hi ${name} welcome to ${address}`)
}

welcome()