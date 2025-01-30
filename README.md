# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express applications where an unhandled promise rejection within an asynchronous request handler can lead to silent failures. The application continues to run, but errors are not properly propagated or handled, making debugging difficult.

## Problem

The `bug.js` file contains an Express.js app with a route handler that performs an asynchronous operation.  There is a 50% chance of that operation throwing an error.  However, this error is simply logged to the console and the process does not stop, allowing for the continued processing of additional requests.  This can be difficult to debug, especially when these errors occur intermittently. 

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections in asynchronous route handlers.  It uses a `try...catch` block to handle any potential errors and sends an appropriate error response to the client.  It also demonstrates the use of process event listeners to globally handle any uncaught exceptions.