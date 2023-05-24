const express = require('express');
const { get } = require('http');
const app = express();

app.get('/greeting', (req, res) => {
    const greeting = 'Hello, stranger!';
    res.send(greeting);
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
