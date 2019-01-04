var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function(req, res){
    res.sendFile('E:/node-ang-ex/node-ang5/src/index.html');
});

app.post('/submit-form', function(req, res){
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' submitted successfully!');
});

app.listen(3000, function(){
    console.log('server running...');
});