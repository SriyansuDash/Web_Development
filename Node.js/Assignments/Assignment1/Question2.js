// const http = require('http');
// const fs = require('fs');

// function isPallindrome(string){
//     let str = "";
//     for(let i = string.length -1; i>=0 ;i--){
//         str += string.charAt(i);
//     }
//     if(str === string){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const server = http.createServer((Request , Response) =>{
//     let string = "abcba";
//     if(isPallindrome(string)){
//         Response.writeHead(200 , {'Content-Type': 'text/plain'});
//         Response.end("The string is a palindrome");
//     }
//     else{
//         Response.writeHead(200 , {'Content-Type': 'text/plain'});
//         Response.end("The string is not a palindrome");
//     }
// });
// server.listen(3000 , () => {
//     console.log("Server is running on port http://localhost:3000");
// });



const http = require('http');
const fs = require('fs');

function isPalindrome(string){
    let str = "";
    for(let i = string.length - 1 ; i>=0 ;i--){
        str += string.charAt(i);
    }
    return str === string;

}
const server = http.createServer((req, res )=>{
    let string = "abcdcba";
    if(isPalindrome(string)){
        res.writeHead(200 , {'Content-Type' : 'text/plain'});
        res.end(`The String ${string} is a palindrome`);
    }
    else{
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end(`The String ${string} is not a palindrome`);
    }
});

server.listen(5500, () =>{
    console.log("Server is running on http://127.0.0.1:5500")
});