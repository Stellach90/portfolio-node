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
app.get('/wetfood', function (req, res) {
    res.render('wetfood', {title : `../img/mainpage_cover4.png`});
});

app.get('/portfolio', function (req, res) {
    res.render('portfolio', {title : 'Dry Food'});
});

app.get('/greenp', function (req, res) {
    res.render('greenp', {title : 'catnip'});
});

app.get('/minions', function (req, res) {
    res.render('minions', {title : 'catnip'});
});

app.get('/wine', function (req, res) {
    res.render('wine', {title : 'catnip'});
});


// Set static folder
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, ()=> console.log('server listening on port ' + PORT))




