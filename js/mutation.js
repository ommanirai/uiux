/*
mutation
1. mutable behaviour
=> if change in original it is reflected in references
=> if change in references it is reflected in original
=> non-primitive data type(object and array) are mutable

*/
// var laptop1 = {
//     name: 'acer',
//     ram: '4gb',
//     color: 'grey'
// }

// var laptop2 = laptop1
// // laptop1.price = 50000
// laptop2.generation = 'i9'

// console.log(laptop1)
// console.log(laptop2)

// function displayDetails(item){
//     item.price = '90000'
//     console.log(item)
// }
// displayDetails(laptop1)
// console.log(laptop1)

/*
2. immutable behaviour
=> if change in original it is not reflected in references
=> if change in references it is not reflected in original
=> primitive data type(string, number, boolean) are immutable

*/
var naam1 = 'Rashik'
// var naam2 = naam1
// naam1 = 'Saral'
// naam2 = 'Sujan'
// console.log(naam1)
// console.log(naam2)

function displayDetails(item){
    item = 'Sujan'
    console.log(item)
}
displayDetails(naam1)
console.log(naam1)