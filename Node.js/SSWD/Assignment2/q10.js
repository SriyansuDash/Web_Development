
async function asyncOperation(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Operation successful');
        } else {
          reject(new Error('Operation failed'));
        }
      }, 2000);
    });
  }
  
 
  async function main() {
    try {
      
      const result1 = await asyncOperation(true);
      console.log(result1);
  
   
      const result2 = await asyncOperation(false);
      console.log(result2); 
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
 
  main();