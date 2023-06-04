const express = require('express')
const app = express();

//i tried use the split(',')but i realized it doesnt work here since the express can actually divided em
// so im a bit lost there



const magicBallArray = [
    ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", 
    "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", 
    "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it",
    "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


];

app.get('/magic/:question', (req,res) => {
    const question = req.params.question;
    const response = magicBallArray[Math.floor(Math.random(','))];
    res.send(`<h1>Question: ${question}</h1><h1> Magic Ball: ${response}</h1> `);
})

app.listen(3000, function() {
    console.log('Listening......');
});