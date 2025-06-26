const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    
    fs.readFile("mytext.txt", 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Error: File Not Found or Cannot Read the File');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }
    });
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
