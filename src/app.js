var http = require('http');

var server = http.createServer(function(req, res){
    //Sending JSON Response
    if(req.url == '/data'){
        //check the URL of the current request
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({FirstName : "Chandrakala", LastName : "Duggapu", Designation : "BA"}));
        res.end();
    }


    if(req.url == '/'){
        //"req.url == '/'" checking with the current request url
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is home page</h2></body></html>');
        res.end();
    }
    else if(req.url == '/student'){
        //"req.url == '/student'" checking with the current request url
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h2>This is student page</h2></body></html>');
        res.end();
    }
    else if(req.url == '/admin'){
        //"req.url == '/admin'" checking with the current request url
        res.writeHead(200, {'Content_type': 'text/html'});
        res.write('<html><body><h2>This is admin page</h2></body></html>');
        res.end();
    }
    else{
        res.end('<html><body><h2>Invalid Request!</h2></body></html>');
    }
});

server.listen(3000);
console.log('Server running...');