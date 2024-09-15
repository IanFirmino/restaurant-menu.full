const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('frontend'));

app.get('/home', (req, res) => {
    res.send('olá');
});

app.listen(port, () => {
    console.log(`api rodando em http://localhost:${port}`);
});
