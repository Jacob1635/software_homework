const express = require('express');
const app = express();

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);

    if (!total || !tipPercentage) {
        res.status(400).send('use real number fool.. TIP THESE NICE PEOPLE');
        return;
    }
    

const tipAmount = (total * tipPercentage) / 100;

    res.send(tipAmount.toFixed(2));
});

app.listen(3000, () => {
    console.log('Listening......');
});

