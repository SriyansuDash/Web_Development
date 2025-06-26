const http = require('http');
function isPalindrome(str) {
   let st="";
   for(let i=str.length-1;i>=0;i--){
    st+=str.charAt(i);
   }
   return st===str;
}


const server = http.createServer((req, res) => {
    let name="abcba"
    if (isPalindrome(name)) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`"${name}" is a palindrome!`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`"${name}" is NOT a palindrome.`);
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
