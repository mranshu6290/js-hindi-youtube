// JavaScript Execution Context

/*
 * When code is executed, a Global Execution Context is created.
 * The value of 'this' will differ based on the context: it refers to the global object in browsers
 * and to the global context in Node.js (like VS Code).

 * There are three types of execution contexts:
 * 1. Global Execution Context
 * 2. Eval Execution Context (part of the global context)
 * 3. Functional Execution Context

 * Code is executed in two phases:
 * 1. Memory Phase (Creation Phase)
 * 2. Execution Phase
 */

// Phase 1: Memory Phase
// In the global execution context, memory is allocated for variables and functions.
// Example variable allocations:
let value1; // Initially undefined
let value2; // Initially undefined
// Function definitions are stored, but their execution context is not created yet.

// Phase 2: Execution Phase
// During execution, actual values are assigned to the variables:
value1 = 10; // Assigning value 10
value2 = 20; // Assigning value 20

// When a function is called, a new execution context is created for that function.
// This new context has its own variable environment and execution thread (sandbox).

// For every function execution, both phases are run:
// 1. Memory Phase: All variables are initialized to undefined.
// 2. Execution Phase: Actual values are allocated to variables.

// The return statement will return a value to the calling context.
// After a function execution completes, its execution context is removed from memory (sandbox is deleted).

/**
 * Call Stack
 *
 * The call stack maintains the order of execution contexts.
 * The global execution context is at the bottom of the stack.
 *
 * Whenever a function is called, it is pushed onto the stack.
 * Once the function has finished executing, it is popped off the stack.
 *
 * If functions call one another (e.g., function one calls two, which calls three),
 * they follow the Last In, First Out (LIFO) principle.
 * So, function three will be removed first, followed by function two, then function one.
 */
