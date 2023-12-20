/*
array
=> item inside array is called elements of array
=> index of element always start with 0
=> js array is heterogenious


accessign the elements of array
syntax:
array_name[index]

*/
// var fruits = ['apple', 'mango', 'kiwi', true, 1, [1,2,3,4], {
//     name: 'ram',
//     address: 'Vedu'
// }]
// console.log(fruits)
// console.log(fruits[0],fruits[1])
// console.log(fruits[5])

var fruits = ['apple', 'mango', 'mango', 'kiwi', 'orange', 'kiwi', 'apple', 'strawberry']
// adding elements to array
// in first position
// fruits.unshift('papaya')
// in last position
// fruits.push('orange')
//in random posiiton
// removing elements from array
// from first position
// fruits.shift()
// from last position
// fruits.pop()

// splice
// syntax:
// array_name.splice(starting_index, 'number_of_elements_to_remove', "add_elements")
// fruits.splice(1, 1, "orange", 'papaya')

// slice
// var result = fruits.slice(2, 4)
// console.log(result)

// console.log(fruits)


// forEach
/*
syntax:
array_name.forEach(function(item, index){
    // body of forEach
})
*/
var bikes = ['honda', 'yamaha', 'honda', 'ktm']

// bikes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)
// })


var fruits = ['apple', 'mango','apple', 'apple', 'mango', 'kiwi', 'orange', 'kiwi', 'apple', 'strawberry']
var uniquefruitss = {}
fruits.forEach(function(item){
    if(uniquefruitss[item]==undefined){
        uniquefruitss[item] = 1
    }
    else{
        uniquefruitss[item]++
    }
})
console.log(uniquefruitss)

// {
//     apple: 1,
//     mango: 2,
//     kiwi: 2,
//     orange: 1,
//     strawberry: 1
// }

// var uniqueFruits = []
// fruits.forEach(function (item, index) {
//     // console.log(item)
//     // console.log(index)
//     if (uniqueFruits.indexOf(item) == -1) {
//         uniqueFruits.push(item)
//     }
// })
// console.log("unique"+uniqueFruits)
// getUniqueArray(fruits)
// getUniqueArray(bikes)

// console.log(fruits.indexOf("mango"))
// console.log(fruits.lastIndexOf("mango"))