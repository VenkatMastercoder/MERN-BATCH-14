console.log("Hello World");

// Array - An Arrays is a Collection of Data Types with Stores an Ordered Sequence of Items [ number , String , Bool, Null ]

/**
 * 1. How to Create Array
 *    - let arr = [1,"Ram",true,null]
 *
 * 2. How do you Access an Element in Array
 *    - By index [ 0 , ~ ]
 *    - console.log(arr[1])
 *
 * 3. How to Count the No of Element
 *    - By index [ 1 , ~ ]
 *    - length : arr.length
 *
 * 3. How do you Modify an Element in Array
 *    - arr[3]
 *
 * 4. How do you Add Element in Array
 *    - arr.push("Sam") , Note: Always at Last
 *
 * 5. How do you Remove in Array
 *    - arr.pop() , Note: Always at Last
 * **/

// Index - 0   1    2    3
let arr = [1, "Ram", true, null];
// Lengt - 1   2    3    4

console.log(arr);

console.log("Before:", arr[1]); // Ram
console.log(arr[3]);
console.log(arr[4]);
console.log("===================");
arr[1] = "Sam";
console.log("After:", arr[1]);
console.log(arr);
console.log("===================");
console.log(arr.length);
console.log("===================");
console.log(arr.push("Sam"));
console.log(arr);
console.log("===================");
console.log(arr.pop());
console.log(arr);

console.log("========Object=========");
/**
 * Object - A Object is an Collection of Properties
 * - Properties : { key - Value }
 *    ==> Key : Unique
 *    ==> Valuew : Anything - String, Num, Bool, null
 *
 * 1. How to Create an Object
 *    - { name: "Sam", age: 1 };
 *
 * 2. How to Access an Object
 *    - Dot Notation  : person.name
 *    - Bracket Notation : person["name"]
 *
 * 3. How to Modify a Object
 *    - Dot Notation : person.age = 60
 *    - Bracket Notation : person["name"] = "Ram"
 *
 * 4. How do you Add an Element in Object
 *    - Dot Notation : person.age = 60
 *    - Bracket Notation : person["name"] = "Ram"
 *
 * 5. How to Remove an Element in Object
 *    - Dot Notation : delete person.gender
 *    - Bracket Notation :  delete person["number"]
 * **/

/**
 * Identifiers: Set of Rules to Name a Variable
 *
 *
 * firstName - ✅
 * $firstName - ✅
 * _firstName - ✅
 * firstName12 - ✅
 *
 * first Name - ❌
 * 12firstName - ❌
 *
 * **/

let person = { name: "Sam", age: 1 };

console.log(person);

console.log("===================");
console.log(person.name);
console.log(person.age);

console.log(person["name"]);
console.log(person["age"]);

console.log(person.gender); // undefined
console.log("===================");

person["name"] = "Ram";
person.age = 60;
console.log(person);

console.log("===================");

person.gender = "sdfsfw";
person["number"] = "1234567890";
console.log(person);

console.log("===================");

delete person.gender;
delete person["number"];
console.log(person);
console.log("===================");

let arr2 = [1, "Hello", true, null, [1, 2], { car: "Audi" }];

let obj = {
  number: 1,
  names: "Sam",
  habit: true,
  no: null,
  habits: ["Chess", "Playing Football"],
  car: {
    name: "Audi",
    model: "A5",
    color: "White",
  },
};

console.log(obj.number);
console.log(obj.names);
console.log(obj.habit);
console.log(obj.habits);
console.log(obj.habits[1]);
console.log(obj.car.name);

console.log("===================");
// Loose --> Not Check the Types
// Strict Equality --> Check the Types

let num1 = 5
let num2 = "5"

if(num1 === num2) {
  console.log("True")
} else {
  console.log("False")
}