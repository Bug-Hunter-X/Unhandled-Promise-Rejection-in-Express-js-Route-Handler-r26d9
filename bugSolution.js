const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(err => {
      console.error('Caught Error:', err); // Log the error for debugging
      res.status(500).send('Internal Server Error'); // Respond with an error to the client
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

// Add a process event listener for uncaught exceptions (more robust handling)
process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process to prevent further issues
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});