/*
setTimeout()
setInterval()
typeof()
Number()
*/
// string
var str = "GoodMorning"
var email = 'rag@gmail.com'
// var result = str.length
// // console.log(result)
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.substring(1,3))
// console.log(str.substr(1,3))
// console.log(email.includes('@gmail'))

// split 
// string to array
var fruits = 'mango, apple, banana, kiwi, papaya'
var fru = fruits.split('a')
// console.log(fru)

// number
var number = 100.1268
// console.log(number.toFixed(0))
// console.log(!isNaN(number))

// object
var laptops = {
    name: 'acer',
    gen: 'i9',
    ram: '8gb',
    color: 'grey'
}
// console.log(laptops.hasOwnProperty('name'))
// console.log(Object.keys(laptops))
// console.log(Object.values(laptops))
// for in
// for(var item in laptops){
//     console.log(item)
//     console.log(laptops[item])
// }

// json => javascript object notation
var serialization = JSON.stringify(laptops)
// console.log(typeof(serialization))
// console.log(serialization)
// console.log(laptops)
var deserialization = JSON.parse(serialization)
console.log(typeof(deserialization))
console.log(deserialization)

