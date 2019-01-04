var express = require('express');
var mssql = require('mssql');

var app = express();

app.get('/', function (req, res) {
    var config = {
        username: 'sa',
        password: 'mypwd',
        server: 'localhost',
        Database: 'SchoolDB'
    };

    mssql.connect(config, function (err) {
        if (err) console.log(err);

        var request = new mssql.Request();

        request.query('select * from student', function(err, resdata){
            if (err) console.log(err);

            app.send(resdata);
        });

    });

});

app.listen(3000);