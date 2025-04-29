const http = require('http');
const fs = require('fs');

const server = http.createServer((request , response ) =>{
    fs.readFile("my.text" ,'utf-8' , (err , data) =>{
        if(err){
            response.writeHead(404 , {'Content-Type' : 'text/plain'});
            response.end("File not found");
        }
        else{
            response.writeHead(200 , {'Content-Type':'text/plain'});
            response.end(data);
        }
    
    });
});

server.listen(3000 , () =>{
    console.log("Server is running on http://localhost:3000");
    
});