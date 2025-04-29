const http = require('http');
const fs = require('fs');
const url = require('url');
function isArmstrong(number){
    const str = number.toString();
    const length = str.length;
    let sum = 0;
    for(let digit of str){
        sum += Math.pow(parseInt(digit), length);
    }
    return sum === number;
}
const server = http.createServer((req, res) =>{
    let number = 153;

    if(isNaN(number)){
        res.end("<h1>Invalid Input</h1>");

    }
    else{

        if(isArmstrong(number)){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(`The number ${number} is an Armstrong number`);
        }
        else{
            res.writeHead(404 , {'Content-Type' : 'text/html'});
            res.end(`The number ${number} is not an Armstrong number`);
        }
    }
});

server.listen(3000, () =>{
    console.log("Server is running at http://localhost:3000");
});