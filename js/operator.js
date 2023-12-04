/*
operator
=> symbol which perform specific task

types: 
1. arithmetic operator
+
- 
/ division
* multiplication
% remainder
++ increment
-- decrement 

2. relational operator
=> result: either true or false(boolean)
< less than
> greater than
<= less than or equalls to
>= greater than or equalls to


3. assignment operator
=
+=
-=
/=
*=
%=


4. comparision operator
=> result: either true or false(boolean)
== ===

5. concatinate operator
+ ,

6. logical operator
a. logical and(&&)
condition-1    condition-2    result(condition-1 && condition-2)
T               T               T && T => T
T               F               F
F               T               F
F               F               F

b. logical or(||)
condition-1    condition-2    result(condition-1 || condition-2)
T               T               T || T => T
T               F               T
F               T               T
F               F               F

c. logical not(!)
condition   result(!condition)
T           !T => F
F           T


7. conditional operator(ternary)
syntax:
condition ? 'body of truth' : 'body of false'


*/
var a = 23;
var b = 211;
// a = b++

// b = b + 1
// b += 1
// b++;
// console.log(a<=b)
// a /= b
// a = a / b;
// console.log('the sum of two number a and b is:')
// console.log('the sum of two number '+ a + ' and '+b +" is: "+ (a + b))
var x = (a < b)
var y = (a == b)
var res = x || y
// console.log(res)
var greaterOne = a < b
greaterOne
    ? a < 10
        ? console.log(a, " is less than ", b, "and less than 10")
        : console.log(a, " is less than ", b, "and greater than 10")
    : console.log(b, ' is less than ', a)