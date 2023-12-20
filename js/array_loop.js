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
    },
    {
        name: 'hp',
        ram: '8gb',
        price: '150000'
    },
    {
        name: 'mac',
        ram: '8gb',
        price: '175000'
    },
    {
        name: 'acer',
        ram: '4gb',
        price: '50000'
    },
    {
        name: 'acer',
        ram: '4gb',
        price: '50000'
    },
    {
        name: 'hp',
        ram: '4gb',
        price: '50000'
    },
    {
        name: 'dell',
        ram: '4gb',
        price: '50000'
    },
]
// laptops.forEach(function(item, index){
//     // console.log(item)
//     item.generation = 'i10'
// })
// console.log(laptops)

// map
var laptopNames = laptops.map(function(item, index){
    return item.name;
})
// console.log(laptopNames)

// filter
var priceCollection = laptops.filter(function(item, index){
    if(item.price == 50000 && item.name == 'hp'){
        return item;
    }
})
// console.log(priceCollection)

// find
var findPrice = laptops.find(function(item, index){
    if(item.price == 150000){
        return true;
    }
})
// console.log(findPrice)

var someResult = laptops.some(function(item, index){
    if(item.ram == '8gb'){
        return true;
    }
})
// console.log(someResult)

var everyResult = laptops.every(function(item, index){
    if(item.ram == '8gb'){
        return true;
    }
})
// console.log(everyResult)

// reduce
/*
array_name.reduce(function(acc, item,index, source){
    // body of reduce
})

*/
laptops.reduce(function(acc, item, index, source){
    console.log(source)
    return 5
})