var http = require('http');
var fs = require('fs');

const PORT=8080; 

fs.readFile('./8_5B_3.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});