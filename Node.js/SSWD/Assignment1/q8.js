const http = require('http');
const url = require('url');
function isArmstrongNumber(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === number;
}


const server = http.createServer((req, res) => {
    let num=128;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if ( isNaN(num)) {
        res.end('<h2>Please provide a valid number in the URL query. Example: http://127.0.0.2:8125/?number=153</h2>');
    } else {
        if (isArmstrongNumber(num)) {
            res.end(`<h2>${num} is an Armstrong number.</h2>`);
        } else {
            res.end(`<h2>${num} is NOT an Armstrong number.</h2>`);
        }
    }
});
server.listen(8125,  () => {
    console.log('Server is running at http://127.0.0.2:8125');
});
