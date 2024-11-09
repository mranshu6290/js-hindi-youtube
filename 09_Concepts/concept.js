// JavaScript Execution Model

// JavaScript is a **single-threaded** language, meaning it executes one operation at a time on a single thread.
// This is also known as **synchronous execution**, where code runs in a sequential, line-by-line manner in the same thread.

// **Blocking vs Non-blocking Code**:
// - **Blocking code**: Functions that block the execution of subsequent code until they complete.
//   For example, file read/write operations in JavaScript can be blocking, meaning the program waits for the operation to finish before continuing.
// - **Non-blocking code**: JavaScript uses non-blocking calls (such as async operations, events, and timers) to continue running other tasks while waiting for something to finish.

// **File Operations**:
// When performing file read/write operations, the file content is passed to the kernel, and then from the kernel, it is returned to the application.

// JS Engine: Call Stack & Memory Heap
// The JavaScript engine has two main components:
// 1. **Call Stack**: Keeps track of function calls. It operates as a stack (LIFO), meaning the last function called is the first to be executed.
// 2. **Memory Heap**: Stores objects and variables.

// **Call Stack Process**:
// - When a function is called, it is added to the **call stack**.
// - After the function completes execution, it is removed from the stack.
// - The memory associated with the function is managed in the **heap**.

// Handling Asynchronous Code in JavaScript

// Although JavaScript is single-threaded, it has mechanisms to handle asynchronous operations:

// **Async Code**:
// - When we write asynchronous code (like setTimeout, fetch, etc.), the JavaScript engine doesn't block the thread while waiting for the operation to complete. 
// - Instead, the engine registers the async operation and continues with the next line of code.

// **Event Loop**:
// - The event loop is responsible for managing asynchronous code in JavaScript. It allows JavaScript to perform non-blocking operations despite being single-threaded.
// - When an asynchronous operation (e.g., setTimeout, fetch, DOM events) is complete, its callback is added to the **callback queue**.
// - The event loop constantly checks the call stack. If the stack is empty, it moves the first item from the callback queue to the stack for execution.

// **Task Queue**:
// - The **task queue** (also called the callback queue) is a queue that holds all the callbacks (such as from setTimeout, events, fetch, etc.) that are ready to be executed.
// - The task queue is processed in a **FIFO (First In, First Out)** manner, meaning the first callback that is registered is the first to be processed.

// **Promise Queue**:
// - The **promise queue** is a special type of task queue where promises are resolved. For example, the `fetch` API uses promises, and its callbacks are handled in the promise queue.

// **Call Stack Example**:
// - The **call stack** stores function calls that need to be executed. 
// - When you call a function, it’s added to the stack. When the function is finished, it’s removed from the stack.
// - **Example**: 
//   function first() { console.log("First function"); }
//   function second() { first(); console.log("Second function"); }
//   second(); // Output: First function, Second function

// **Async Example**:
// - Example using `setTimeout` with async behavior:
setTimeout(function() {
    console.log("This will be executed asynchronously!");
  }, 0);
  // Despite the timeout being set to 0, the callback will not execute until the call stack is empty because it is added to the **task queue**.
  
  // **Promise Example**:
  // - Promises are handled asynchronously through the promise queue.
  const myPromise = new Promise((resolve, reject) => {
    resolve("Resolved after async operation");
  });
  
  myPromise.then(result => console.log(result)); // This will be handled in the promise queue.
  
  
  // **Why is JavaScript Single-Threaded?**:
  // - JavaScript is single-threaded because it was designed to run in the browser, where running multiple threads could be inefficient for simple tasks like interacting with DOM elements.
  // - Node.js is also single-threaded but leverages non-blocking I/O to handle multiple requests concurrently.
  
  
  // **Web APIs & JavaScript Environment**:
  // - JavaScript relies on **Web APIs** in the browser for handling asynchronous operations like HTTP requests (via `fetch`), timers (via `setTimeout`, `setInterval`), and DOM events.
  // - In Node.js, we don't have a DOM model but rely on other APIs (such as the filesystem or HTTP server).
  
  // **Task Queue Processing Example**:
  // 1. The **call stack** is empty, so the event loop checks the task queue.
  // 2. If there are any callbacks in the task queue (like from `setTimeout` or an event handler), they will be moved to the call stack and executed one by one.
  
  // **The Event Loop**:
  // - The event loop runs continuously and checks if the call stack is empty.
  // - If the stack is empty, it pushes the first callback from the task queue to the call stack for execution.
  // - This ensures that asynchronous operations don’t block the main thread, but their callbacks are still executed at the right time.
  
  // **Promise & Async Handling**:
  // - Promises are handled differently from standard callbacks because they are placed in a separate queue (the promise queue), which is processed after the call stack is empty but before the task queue.
  
  