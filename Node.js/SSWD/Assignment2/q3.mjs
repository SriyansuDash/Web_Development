function calculateCubeVolume(sideLength) {
    if (sideLength <= 0) {
      throw new Error('Side length must be a positive number');
    }
    return Math.pow(sideLength, 3);
  }
  function main() {
    try {
      const sideLength = 5; 
      const volume = calculateCubeVolume(sideLength);
      console.log(`The volume of the cube with side length ${sideLength} is: ${volume}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  

  main();