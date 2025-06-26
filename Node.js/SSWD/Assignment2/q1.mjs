import { readdir } from 'fs/promises';
async function listFiles(directoryPath) {
  try {
    const files = await readdir(directoryPath);
    console.log(`Files in ${directoryPath}:`);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
  }
}

async function main() {
  const directoryPath = './';
  await listFiles(directoryPath);
}
main();