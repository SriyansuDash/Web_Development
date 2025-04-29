// palindromeHttpServer.js

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const number = queryObject.number;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (number === undefined) {
        res.end('<h2>Please provide a number in the URL like ?number=121</h2>');
        return;
    }

    const numStr = number.toString();
    const reversed = numStr.split('').reverse().join('');

    if (numStr === reversed) {
        res.end(`<h2>${number} is a Palindrome!</h2>`);
    } else {
        res.end(`<h2>${number} is NOT a Palindrome!</h2>`);
    }
});

server.listen(8185, () => {
    console.log('Server running at http://127.0.0.1:8185/');
});
