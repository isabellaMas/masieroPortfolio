const express = require('express');
const app = express();
const port = 3001; // Choose a port for your server

// Define your API routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
