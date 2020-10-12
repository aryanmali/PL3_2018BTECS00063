var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("Enter Correct URL of the page");  
            response.end();  
            break;  
        case '/feedback':  
            fs.readFile("G:\Academics\'SEM 5'\PL3\'Prac 5'\Practical_6A\index.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write("CRASHED"); 
                    response.write(data);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        
        default:  
            response.writeHead(404);  
            response.write("Error Page - 404");  
            response.end();  
            break;  
    }  
});  
server.listen(3000); 