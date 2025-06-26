import { readFile } from 'fs/promises';
async function readFileAsync(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    console.log(`File content: ${fileContent}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}


async function main() {
  const filePath = 'example.txt'; 
  await readFileAsync(filePath);
}


main();