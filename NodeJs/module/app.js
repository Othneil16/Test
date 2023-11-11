       //DOT NOTATION
    
/*
const  myAddition = require("./maths")
const mySubtraction = require("./maths")
const myDivision = require("./maths")
const myMultiply = require("./maths")

 
let firstNumber = 5;
 let secondNumber = 7;
 let result = myAddition.add(firstNumber, secondNumber)
 console.log(result)


 let a = 5;
 let b = 10;
 let solu = mySubtraction.sub(a, b)
 console.log(solu)

let c = 24;
let d = 2
let solut = myDivision.div(c, d)
console.log(solut)


let e = 6;
let f = 7;
let solute = myMultiply.mul(e,f)
console.log(solute)
*/



     //DESTRUCTURING METHOD

const {add, sub, mul, div} = require("./maths")


let firstNumber = 5;
 let secondNumber = 7;
 let result = add(firstNumber, secondNumber);
 console.log(result)

 let a = 5;
 let b = 10;
 let solu = sub(a, b);
 console.log(solu)

 let c = 24;
let d = 2
let solut = div(c, d);

console.log(solut)


let e = 6;
let f = 7;
let solute = mul(e,f);
console.log(solute)