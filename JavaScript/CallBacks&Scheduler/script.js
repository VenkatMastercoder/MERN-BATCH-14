/**
 * Function
 * - Arg
 *    - Number, String,Bool,null,Array,object
 *    - Function [ CallBack ]
 * 
 * 1. CallBack Function
 *    - A function that is passed as an Argument to Another function
 * 
 * 2. Scheduler
 *    - THE SCHEDULER ARE USED TO SCHEDULE THE EXECUTION OF CALLBACK FUNCTION 
 *  Note : time - 1000 milliSeconds = 1 sec
 *    - setInteral  
 *        Syntax : 
 *    - setTimeout 
 *        Syntax :
 * * */

// Parameters
function add(a,b) {
  console.log(a+b)
}

add(10,10) // 10 --> Argument

function a(val) {
  console.log(val)
}

a(function ab() {
  console.log("NSPIFW")
})

let counter = 0

// const id = setInterval(function() {
//   counter = counter + 1
//   console.log(counter)
// },1000)

// clearInterval(id)

const cid = setTimeout(()=>{
  console.log(counter)
  counter = counter + 1
},1000)

clearTimeout(cid)