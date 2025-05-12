// Array 

let array = [1,2,3,4,5]

/**
 * 1. Map - it like a for Loop
 *          [ it Always Return as an Array ]
 * 2. Filter - it like a for Loop give a Condition
 *          [ it Always Return as an Array ]
 * 3. Reduce - 
 */

const ans = array.map((i)=>{
  console.log(i)
  return i
})


const res = array.filter((i)=>{
  return i > 2
})

const q = array.reduce((accumlator,currentValue)=>{
  return accumlator + currentValue
})

console.log(q)