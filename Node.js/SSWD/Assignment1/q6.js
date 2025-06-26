// download.js

const fs = require('fs');
const https = require('https');
const http = require('http');
const url = require('url');

// Function to download an image
function downloadImage(imageUrl, outputFilename) {
    const parsedUrl = url.parse(imageUrl);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    protocol.get(imageUrl, (response) => {
        if (response.statusCode === 200) {
            response.pipe(fs.createWriteStream(outputFilename));
            console.log(`Image downloaded successfully as "${outputFilename}"`);
        } else {
            console.log(`Failed to download image. Status Code: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
}

// Example usage
const imageUrl = 'https://example.com/sample.jpg'; // <-- Replace with your image URL
const outputFilename = 'downloaded-image.jpg';

downloadImage(imageUrl, outputFilename);
