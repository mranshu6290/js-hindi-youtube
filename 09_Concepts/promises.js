/**
 * Promises in JavaScript
 * 
 * A Promise is an object in JavaScript used for handling asynchronous operations. 
 * It represents a value that may not be available yet, but will be resolved in the future.
 * 
 * States of a Promise:
 * 1. **Pending**: The initial state, before the asynchronous operation completes.
 * 2. **Fulfilled**: The operation has completed successfully.
 * 3. **Rejected**: The operation has failed or encountered an error.
 * 
 * Creating a Promise:
 * A promise is an object that can be created using the `new Promise()` constructor. 
 * It takes a function as an argument, which contains two parameters: `resolve` and `reject`.
 * These parameters are used to indicate whether the operation was successful or failed.
 */

// Example of creating a Promise
// A promise is an object
const promiseOne = new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation (e.g., network request)
    setTimeout(function() {
      console.log("Hello after 1 second");
      resolve();  // Promise is fulfilled // this resolve connects to then statement
    }, 1000);
  });
  
  // We used to use Q and Bluebird libraries before Promises were built into JavaScript.
  
  /**
   * Consuming a Promise:
   * To handle the result or error of a promise, we use `.then()` and `.catch()` methods.
   * 
   * - `.then()` is used to handle the promise when it is fulfilled. 
   *   It can accept a callback that receives the resolved value.
   * - `.catch()` is used to handle any errors if the promise is rejected.
   */
  
  // Example of consuming a Promise
  // Uncomment the below code to handle a promise using .then() and .catch()
  // promiseOne.then(function(result) {
  //   console.log(result);  // This will log "Success" if the promise is fulfilled
  // }).catch(function(error) {
  //   console.log(error);  // This will log any error if the promise is rejected
  // });
  
  /**
   * Promises and Asynchronous Operations:
   * Promises are essential for handling asynchronous operations like database calls, 
   * network requests, or file I/O without blocking the main thread.
   * 
   * Before promises, managing async operations was more complex. Libraries like **Bluebird** were used 
   * for better async management. Promises simplify this process by allowing developers to write cleaner 
   * and more maintainable asynchronous code.
   */
  
  /**
   * Chaining Promises:
   * Promises can be chained using multiple `.then()` methods, allowing you to 
   * execute multiple async operations in sequence.
   */
  
  // Example of chaining promises
  new Promise(function(resolve, reject) {
    resolve("Step 1 completed");
  }).then(function(result) {
    console.log(result);  // Logs: "Step 1 completed"
    return "Step 2 completed";
  }).then(function(result) {
    console.log(result);  // Logs: "Step 2 completed"
  });
  
  /**
   * The `finally()` method:
   * The `finally()` method is always executed, regardless of whether the promise resolves or rejects.
   * It does not depend on the outcome of the promise and is typically used for cleanup tasks.
   */
  
  // Example of using .finally() method
  promiseOne.finally(function() {
    console.log("This will run regardless of promise success or failure.");
  });
  
  /**
   * Handling Promises with `async` and `await`:
   * `async` and `await` are used together to simplify promise handling, especially when we want 
   * to avoid using `.then()`.
   * - `async` is used to declare a function that works with promises.
   * - `await` pauses the execution of the async function until the promise resolves or rejects.
   * 
   * Note: `async` cannot handle errors directly, so `try-catch` is needed to catch errors inside async functions.
   */
  
  // Example using `async` and `await`
  async function consumePromise() {
    console.log("Reached in async");
  
    // Fetching data from an API (returns a promise)
    const fetching = await fetch("https://jsonplaceholder.typicode.com/users/");
    
    // The response from fetch is a string, we need to convert it to JSON format
    const xmlConverted = await fetching.json();
    
    // Log the converted JSON data
    console.log(xmlConverted);
  }
  
  // Call the async function
  consumePromise();
  
  /**
   * When you use `await`, the function will pause and wait for the promise to resolve before continuing.
   * We can use `await` for any operation that returns a promise.
   * 
   * `fetch` is a global method that returns a promise. You can use `async/await` or `.then()` to handle the result.
   * If the request fails, the promise is rejected, and the error is thrown.
   */
  
  // Example of fetch request and error handling
  async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  fetchData();
  
  /**
   * Microtask Queue:
   * `fetch()` works with the microtask queue (also called the priority queue). This ensures that promises
   * are handled before other asynchronous operations such as timers or I/O tasks.
   * 
   * When a fetch request is made, the request is sent in the background, and the promise's state is updated
   * (fulfilled or rejected) accordingly. The promise itself is never directly accessible.
   * 
   * If the request fails (e.g., network issues), an error will be thrown, which can be caught using `.catch()`
   * or `try-catch` with `async/await`.
   */
  