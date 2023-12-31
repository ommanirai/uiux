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
8. import and export

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
// function displayDetails() {
//     var fruits = ['mango', 'apple', 'kiwi']
//     var veg = ['potato', 'tomato']
//     return {
//         fruits: fruits,
//         veg: veg,
//         a: 'a',
//         b: 'b'
//     };
// }
// var { fruits: fruit, veg } = displayDetails()
// console.log(fruit)
// console.log(veg)

// template literals
// + ,
// var text = 'hi '+name+ ' welcome to '+address
var text = `hi ${name} welcome to ${address}`
// console.log(text)

// default argument
var name = 'Shyam'
// function welcome(name = 'man', address = "Vedu") {
//     console.log(`hi ${name} welcome to ${address}`)
// }

// this

// welcome()

// arrow notation function
// const welcome = name => {
//     console.log(`hi ${name} welcome to ${address}`)
// }

const welcome = name => name;
const xyz = abc => {
    return abc;
}

// welcome('sujan')
var laptops = [
    {
        name: 'acer',
        ram: '4gb',
        price: '50000'
    },
    {
        name: 'samsung',
        ram: '4gb',
        price: '60000'
    },
    {
        name: 'dell',
        ram: '8gb',
        price: '150000'
    }
]
var acerLaptop = laptops.filter(function (item, index) {
    if (item.name == 'acer') {
        return item;
    }
})

var acers = laptops.filter(item => item.name == 'acer')

// console.log(acers)

// console.log(acerLaptop)

// spread and rest operator(...)
var obj1 = {
    a: '12',
    b: 'ram'
}
var obj2 = {
    c: '982342432',
    d: 'hari'
}
// spread
// copy the contents one by one 
// concatinate
// convert to immutable
var obj3 = {
    ...obj1,
    ...obj2
}
// obj1.e = 'hi'
obj3.f = 'Namaste'
// console.log("obj 1>>>", obj1)
// console.log('obj 2 >>>', obj2)
// console.log('obj 3 >>>', obj3)

// rest 
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
const { fruits, ...rest } = displayDetails()
// console.log(fruits)
// console.log(rest)

// import and export
// export
// two way of export
/*
1. named export
var a = 12
export const a
export const b = a

2. default export
export default a

// there can be multiple named export in a file
// there can be only one(single) default export in a file
// there can be both named and default export in a file

// import
two way of import
1. if named export
import {exported_name, next_exported_name} from "location of the file"

2. if default export
import some_name from 'location of the file'

3. if both named and default export
import {exported_name, next_exported_name}, default_export from "location of the file"

*/