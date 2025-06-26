
import { readdir } from 'fs/promises';


async function countFiles(directoryPath) {
  try {
    const files = await readdir(directoryPath);
    console.log(`Number of files in ${directoryPath}: ${files.length}`);
    return files.length;
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return null;
  }
}


async function main() {
  const directoryPath = './'; 
  await countFiles(directoryPath);
}

main();