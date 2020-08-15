const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const exphbs  = require('express-handlebars');



// Set handlebar
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', function (req, res) {
    res.render('home');
});

//creat about page route
app.get('/experience', function (req, res) {
    res.render('experience', {title : ''});
});

app.get('/portfolio', function (req, res) {
    res.render('portfolio', {title : ''});
});

app.get('/greenp', function (req, res) {
    res.render('greenp', {title : ''});
});

app.get('/minions', function (req, res) {
    res.render('minions', {title : ''});
});

app.get('/wine', function (req, res) {
    res.render('wine', {title : ''});
});

app.get('/creamysnug', function (req, res) {
    res.render('creamysnug', {title : ''});
});

app.get('/fineart', function (req, res) {
    res.render('fineart', {title : ''});
});

app.get('/starbucks', function (req, res) {
    res.render('starbucks', {title : ''});
});






// Set static folder
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, ()=> console.log('server listening on port ' + PORT))




