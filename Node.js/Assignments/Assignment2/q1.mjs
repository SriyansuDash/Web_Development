// import {readdir} from 'fs/promises';
// async function listFlies(directoryPath){
//     try{
//         const files = await readdir(directoryPath);
//         console.log("Files in directory:", directoryPath);
//         files.forEach(file => {
//             console.log(file);
//         });
//     } catch(error){
//         console.log("Error reading directory:", error.messages)
        
//     }
// }
// async function main(){
//     const directoryPath = './';
//     await listFlies(directoryPath);
// }
// main();


// import {readdir} from 'fs/promises';
// async function listFlies(directoryPath){
//     try{
//         const files = await readdir(directoryPath);
//             console.log(`Files in directory ${directoryPath}`);
//             files.forEach((file) =>{
//                 console.log(file);
                
//             });
//     }catch (error){
//         console.log("Error reading directory:", error.message);
        
//     }
    
// }
// async function main(){
//     const directoryPath = './';
//     await listFlies(directoryPath);

// }
// main();



import {readdir} from 'fs/promises'

async function listFiles(directoryPath){
    try{
        const files = await readdir(directoryPath);
        console.log(`files in the directory ${directoryPath}`);
        files.forEach((file) =>{
            console.log(file);
            
        });

    }catch(error){
        console.log("Error reading directory:", error.message);
        
    }
}

async function main(){
    const directoryPath = './';
    await listFiles(directoryPath); 
}
main();