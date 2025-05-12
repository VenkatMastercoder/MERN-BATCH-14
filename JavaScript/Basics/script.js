let names = "Ram"
let number = true

console.log(names)
console.log(number)

var a = 20 // Global

{
  let b = 10 // Local
  const pi2 = 3.14
  console.log(b)
}

console.log(a)

const pi = 3.14

// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)

console.log("=================")
let x = 20
let y = 30
let z = ++x

console.log("X:",x)
console.log("Z:",z)
console.log("=================")

let num = 10
let bool = true
let s = "Ram"
let n = null

console.log(num,bool,s,n)
console.log(typeof(num),typeof(bool),typeof(s),typeof(n))

// parameter
function add(a,b) {
  console.log(a+b)
}

add(5,5) //Argument
add(10,10)
add(20,20)
add(30,30)

function area(l,b) {
  console.log(l*b)
}

area(10,20)

let q = 20


if(q>17) {
  console.log("True")
} else {
  console.log("False")
}

for(let i=0;i <11;i++) {
  console.log(i)
}