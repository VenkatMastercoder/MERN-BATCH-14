// Promises

/**
 * JS
 * - Synchronous Execution [ Default ]
 *   - Line By Line
 *
 * - Asynchronous Execution
 *   - if the Execution takes some time then the Execution is Call Async Execution
 *
 * **/

console.log("Hello World-1");
console.log("Hello World-2");
console.log("Hello World-3");

// Make an API Call
// fetch("https://dummyjson.com/products")
//   .then((e) => {
//     return e.json(); // Asynchronous
//   })
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function fetchData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const ans = await res.json();
    console.log(ans);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
