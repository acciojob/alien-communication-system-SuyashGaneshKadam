//your JS code here. If required.
// Microtasks
console.log('Microtask 1'); 

setTimeout(() => {
  // Macrotask 1
  console.log('Macrotask 1');
  
  setTimeout(() => {
    // Macrotask 2
    console.log('Macrotask 2');
  }, 0);
  
  Promise.resolve()
    .then(() => {
      // Microtask 2
      console.log('Microtask 2'); 
    });
}, 0);

Promise.resolve()
  .then(() => {
    // Microtask 3
    console.log('Microtask 3');
  });
  
// Microtask 4  
console.log('Microtask 4');