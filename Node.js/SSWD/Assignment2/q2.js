
function delayedOperation(name, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${name} completed after ${delay}ms`);
        resolve(`${name} result`);
      }, delay);
    });
  }
  
  
  function main() {
    console.log('Starting operations...');
  
   
    delayedOperation('Operation 1', 2000)
      .then((result1) => {
        console.log(`Received result: ${result1}`);
        return delayedOperation('Operation 2', 1000);
      })
      .then((result2) => {
        console.log(`Received result: ${result2}`);
        return delayedOperation('Operation 3', 3000);
      })
      .then((result3) => {
        console.log(`Received result: ${result3}`);
        console.log('All operations completed');
      })
      .catch((error) => {
        console.error(`Error occurred: ${error}`);
      });
  }
  
 
  main();