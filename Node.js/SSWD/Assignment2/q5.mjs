import http from 'http';
function calculateSphereVolume(radius) {
  if (radius <= 0) {
    throw new Error('Radius must be a positive number');
  }
  return (4/3) * Math.PI * Math.pow(radius, 3);
}


const server = http.createServer((req, res) => {
  try {
    const radius = 5; 
    const volume = calculateSphereVolume(radius);
    const result = `The volume of the sphere with radius ${radius} is: ${volume}`;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`http://localhost:3000/sphere-volume?radius=${radius}&volume=${volume}\n${result}`);
  } catch (error) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(`Error: ${error.message}`);
  }
});


server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});