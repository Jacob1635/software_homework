const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
        const name = req.params.name;
        let = greeting = '';

        if (name === 'Jimmy-boy'){
            greeting = `Wow! Hello There, ${name}! `;
        } else if (name){
            greeting = `What's up, ${name}?`;
        } else {
            greeting = 'Hello, Stranger!';
        }
        res.send(greeting);
    });

    app.get('/greeting', (req, res) => {
        const greeting = "Hello, Stranger!"
        res.send(greeting)
    });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
