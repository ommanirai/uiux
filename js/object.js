// object
// object is collection of key-value, property-value, name-value pair
// block: {}
var phone = {
    // brand: 'mi',
    brand: {
        brand1: 'samsung',
        brand2: 'apple',
        brand3: 'redmi'
    },
    price: 13000,
    ram: '6gb'
}

console.log(phone.brand.brand1)
console.log(phone['brand'].brand1)

// brand, price and ram => key/property/name
// mi, 13000, 6gb => value
// console.log(phone)

/*
two way of accessing object value
1. dot notation
syntax:
object_name.key

2. bracket notation
syntax:
object_name['key']
*/
// dot notation method
// var brand = phone.brand;
// console.log(brand)
// console.log(phone.brand)

// bracket notation method
// var brnd = phone['brand']
// console.log(brnd)

/*
adding property-value to object
syntax:

object_name.key = value

*/
phone.ram = '8gb'
phone.status = 'available'
console.log(phone)