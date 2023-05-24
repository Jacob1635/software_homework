const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
        const name = req.params.name;
        const greeting = `Hello, ${name}!`;
        res.send(greeting);
    });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
