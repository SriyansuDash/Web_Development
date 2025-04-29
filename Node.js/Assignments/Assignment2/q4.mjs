import {readFile} from 'fs/promises';
async function readFileAsync(filepath){
    try{
        const fileContent = await readFile(filepath , 'utf-8');
        console.log(`Content of the file ${fileContent}`);
        
    }catch(error){
        console.log("Error reading file:", error.message);
    }
}
function main(){
    const filepath = './example.txt';
    await readFileAsync(filepath);
}
main();