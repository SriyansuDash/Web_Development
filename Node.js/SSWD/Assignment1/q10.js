const http = require('http');
const url = require('url');
function isPalindrome(number) {
    const str = number.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const num = query.number;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (!num || isNaN(num)) {
        res.end('<h2>Please provide a valid number in the URL query. Example: http://localhost:8185/?number=121</h2>');
    } else {
        if (isPalindrome(num)) {
            res.end(`<h2>${num} is a Palindrome number.</h2>`);
        } else {
            res.end(`<h2>${num} is NOT a Palindrome number.</h2>`);
        }
    }
});


server.listen(8185, () => {
    console.log('Server running at http://localhost:8185');
});
