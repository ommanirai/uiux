
function welcome(name, address){
    var text = "Hi "+name + ' welcome to '+address
    // console.log(text)
    return text;
}

var result = welcome('sujan', 'vedu')
// console.log(welcome('sujan', 'vedu'))
console.log('from welcome function', result)

function cal(a , b){
    var sums = a + b;
    var div = a / b;
    var mul = a * b;
    // console.log('sum of two number is ', sums)
    return {
        sums: sums,
        div: div,
        mul: mul
    };
    // return a + b;
    // console.log("Godd morning")

}
var calculator = cal(23,23);
// console.log(calculator.sums)
console.log(cal(2,2).sums)
// console.log(typeof(calculator))
// var a = 23;
// var b = 21;
// var result = sum(a,b)
// var result1 = sum(3,4)
// var result3 = sum(3,4)
// console.log('sum of two number is ', result)
// console.log('sum is ', result1)
// console.log('sum of two number: ', result3)