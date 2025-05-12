/**
 * 1. Spread
 *
 * 2. Rest
 * **/

// 1. Speard : unpack the element into Indivdual Elements

// Array
let arr1 = [1, 2, 3]; // [1,2,3]

// Copy
let arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]
console.log(arr2);

// Concatenation
let arr3 = [...arr1, ...arr2]; // [1,2,3,1,2,3,4,5]
console.log(arr3);

// Objects
let person1 = { name: "Sam", age: 1 };

// Copy
let person2 = { ...person1, city: "Chennai" }; // {name:"Sam",age:1,city:"Chennai"}

// Concatenation
let person3 = { ...person1, ...person2 };
console.log(person3);

// 2. Rest - Pack all the Elements into Array
// Note: rest will Always should be at Last

// Function
function add(a, b, ...rest) {
  console.log(rest); // []
  console.log(a + b);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

add(...arr);

// String Methods

let names = "Hello World ";

// Help us in Giving the Length
console.log(names.length);

// It Help to Form a Array
console.log(names.split(" "));

// convet all to uppperCase
console.log(names.toUpperCase());

// convet all to lowerCase
console.log(names.toLowerCase());

// Trim - Remove this WhiteSpaces
console.log(names.trim());

console.log("====================");

// 1. Array Destructuring [OnFly]
let array = [1, 2, 3, 4, 5, 6, 7, 8];

let [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(a);

// 2. Object Destructring [OnFly]
let person4 = { namess: "Sam", age: 1 };

// 1. Dot Notion
console.log(person4.age);

// 2. Bracket Notion
console.log(person4["namess"]);

// 3. Object Destructring
const { namess, age } = person4;

console.log(namess, age);
