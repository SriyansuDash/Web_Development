const http = require('http');
const url = require('url');

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "Invalid input: Number must be non-negative";
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Function to calculate the number of factors
function numberOfFactors(n) {
  if (n < 1) {
    return "Invalid input: Number must be greater than zero";
  }
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i === i) {
        count++;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

// Create the server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (path.startsWith('/calculate')) {
    const number = parseInt(parsedUrl.query.number);

    if (isNaN(number)) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end("Invalid input: Please provide a valid number in the query string (e.g., /calculate?number=5)");
      return;
    }

    const fact = factorial(number);
    const factors = numberOfFactors(number);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial and Factors</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
      }
      div {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      h1, h2 {
        color: #333;
      }
      p {
        font-size: 16px;
        color: #555;
      }
    </style>
</head>
<body>
    <div>
        <h1>Factorial and Factors</h1>
        <p>Number: ${number}</p>
        <p>Factorial: ${fact}</p>
        <p>Number of Factors: ${factors}</p>
    </div>
</body>
</html>`);
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found.  Use /calculate?number=your_number');
  }
});

const PORT = 8123;
const HOST = '127.0.0.2';  // Listen on IPv4 address 127.0.0.2

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
