var express = require('express');

var app = express();

app.get('/get', function(req, res){
    res.send('<html><body><h3>Hello Chandrakala!</h3></body></html>');
});

app.post('/post', function(req, res){
    res.send('Executing POST Method');
});

app.put('/put', function(req, res){
    res.send('Executing PUT method');
});

app.delete('/delete', function(req, res){
    res.send('Executing DELETE method');
});

var server = app.listen(3000, function(){
    console.log('Server running...');
})