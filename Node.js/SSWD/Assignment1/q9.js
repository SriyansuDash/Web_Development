const http = require('http');
const url = require('url');
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}


function countFactors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    return count;
}
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url,true);
    const query = parsedUrl.query;
    const num = parseInt(query.number);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (!query.number || isNaN(num) || num < 0) {
        res.end('<h2>Please provide a valid positive number in the URL query. Example: http://127.0.0.2:8123/?number=5</h2>');
    } else {
        const fact = factorial(num);
        const factorsCount = countFactors(num);

        res.end(`<h2>Results for number ${num}:</h2>
                 <p>Factorial: ${fact}</p>
                 <p>Number of Factors: ${factorsCount}</p>`);
    }
});
server.listen(8123, '127.0.0.2', () => {
    console.log('Server running at http://127.0.0.2:8123');
});
