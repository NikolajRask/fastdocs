#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import the copy function
async function copyDirectory(src, dest) {
  try {
    await fs.promises.mkdir(dest, { recursive: true });
    const entries = await fs.promises.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await copyDirectory(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
    console.log(`Copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`Error copying folder: ${err.message}`);
  }
}

// Define the folder inside your bin directory you want to copy
const folderToCopy = path.join(__dirname, 'folderName'); // Replace 'folderName' with your folder

// Get the current working directory (where the CLI is invoked)
const targetDirectory = process.cwd(); // This will give you the directory where the command is run

// Copy the folder to the target directory
copyDirectory(folderToCopy, targetDirectory);
