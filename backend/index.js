const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend'));

app.use(express.json());
app.use(express.static('frontend'));

app.get('/new', (req, res) => {
    res.render('new')
});

app.get('/menu', (req, res) => {
    res.render('menu')
});

app.listen(port, () => {
    console.log(`rodando em http://localhost:${port}`);
});