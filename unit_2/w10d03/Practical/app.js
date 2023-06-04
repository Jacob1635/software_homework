const express = require('express');
const app = express();


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/items', (req, res) => {
  });
  
  app.post('/items', (req, res) => {
  });
  
  app.get('/items/:id', (req, res) => {
  });
  
  app.put('/items/:id', (req, res) => {
  });
  
  app.delete('/items/:id', (req, res) => {
  });
app.use((err, req, res, next) => {
  });
  