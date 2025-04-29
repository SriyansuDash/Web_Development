// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const https = require('https');

// const url = 'https://jsonplaceholder.typicode.com/posts/1';

// http.get(url, (res) => {
//     res.pipe(fs.createWriteStream('download.jpg'));
//     log('File downloaded successfully');
// });

// downloadImage.js

const fs = require('fs');
const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/posts/1'; // replace with actual URL

// https.get(url, (response) => {
//     response.pipe(fs.createWriteStream('downloaded.jpg'));
//     console.log('Image downloaded successfully.');
// });


https.get(url , (response) => {
    response.pipe(fs.createWriteStream('downloaded.jpg'));
    console.log('Image downloaded successfully.');
    
});