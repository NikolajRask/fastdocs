#!/usr/bin/env node

const args = process.argv.slice(2)
const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const version = fs.readFileSync(path.join(__dirname, "./logs/version.txt"),'utf-8').replace("latest version: ", "").trim()
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,  // Standard input
  output: process.stdout // Standard output
});

if (args[0] == "init") {
  init()
  setTimeout(() => {
    exit()
  }, 3100)
}

if (args[0] == "add") {
  add(args[1])
  setTimeout(() => {
    exit()
  }, 100)
}

if (args[0] == "reset") {
  reset()
  setTimeout(() => {
    exit()
  }, 3100)
}

if (args[0] == "help" || args[0] == undefined) {
  help()
}

function init() {
  console.log('\x1b[36m%s\x1b[0m',`

    ______                   __        __                             
   / ____/  ____ _   _____  / /_  ____/ /  ____   _____   _____       
  / /_     / __  /  / ___/ / __/ / __  /  / __ \ / ___/  / ___/       
 / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ // /__   (__  )        
/_/       \__,_/  /____/  \__/  \__,_/   \____/ \___/  /____/         


` )

  console.log("\x1b[32m", `\nFastdocs ${version}:`)
  console.log("\x1b[37m", "\n\nInitializing into your Next.js Project\n")

  const spinnerChars = ['|', '/', '-', '\\'];
  let current = 0;
  let message = "Loading files..."

  // Start the spinner
  const spinner = setInterval(() => {
  process.stdout.write(`\r${spinnerChars[current++]} ${message}`);  // \r returns the cursor to the beginning of the line
  current %= spinnerChars.length;  // Reset to 0 when reaching the end of the array
  }, 100);  // Update every 100 milliseconds

  // Stop the spinner after 5 seconds (for demo purposes)
  setTimeout(() => {
  message = ""
  clearInterval(spinner);  // Stop the spinner
  process.stdout.write('\rDone!                            \n');  // Clear spinner and show "Done"
  process.stdout.write("\r\nThank you for using Fastdocs as your documentation library,\nI hope you enjoy using it.")
  console.log('\x1b[36m%s\x1b[0m', '\n\n\r- \x1b]8;;https://x.com/nkjrask\x1b\\@nkjrask\x1b]8;;\x1b\\')
  process.stdout.write('\nFor documentation, check out: ')
  console.log('\x1b[36m%s\x1b[0m', "\nhttps://fastdocs.dev/docs")
  }, 3000);

  // Define the folder inside your bin directory you want to copy
  const folderToCopy = path.join(__dirname, './template/v1.0'); // Replace 'folderName' with your folder

  // Get the current working directory (where the CLI is invoked)
  const targetDirectory = process.cwd(); // This will give you the directory where the command is run

  // Copy the folder to the target directory
  copyDirectory(folderToCopy, targetDirectory);
}

function reset() {

  try {
    fs.readdirSync(path.join(process.cwd(), "./docs"), 'utf-8')
  } catch (e) {
    console.log("Error: Couldn't find a fastdocs project to reset. try npx fastdocs init")
    exit()
  }


  console.log('\x1b[36m%s\x1b[0m',`

    ______                   __        __                             
   / ____/  ____ _   _____  / /_  ____/ /  ____   _____   _____       
  / /_     / __  /  / ___/ / __/ / __  /  / __ \ / ___/  / ___/       
 / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ // /__   (__  )        
/_/       \__,_/  /____/  \__/  \__,_/   \____/ \___/  /____/         


` )

  console.log("\x1b[32m", `\nFastdocs ${version}:`)
  console.log("\x1b[37m", "\n\nResetting your project\n")

  const spinnerChars = ['|', '/', '-', '\\'];
  let current = 0;
  let message = "Resetting files..."

  // Start the spinner
  const spinner = setInterval(() => {
  process.stdout.write(`\r${spinnerChars[current++]} ${message}`);  // \r returns the cursor to the beginning of the line
  current %= spinnerChars.length;  // Reset to 0 when reaching the end of the array
  }, 100);  // Update every 100 milliseconds

  // Stop the spinner after 5 seconds (for demo purposes)
  setTimeout(() => {
  message = ""
  clearInterval(spinner);  // Stop the spinner
  process.stdout.write('\rDone! Your fastdocs project has been reset\n');  // Clear spinner and show "Done"
  }, 3000);

  // Define the folder inside your bin directory you want to copy
  const folderToCopy = path.join(__dirname, './template/reset/v1.0'); // Replace 'folderName' with your folder

  // Get the current working directory (where the CLI is invoked)
  const targetDirectory = process.cwd(); // This will give you the directory where the command is run

  // Copy the folder to the target directory
  copyDirectory(folderToCopy, targetDirectory);
}

function add(arg) {

  function createPage(page) {
    try {
    if (page != undefined) {
      fs.writeFileSync(path.join(process.cwd(), "./docs/pages/"+page+".tsx"), `import React from 'react'
import { CommandPrompt, Link, SEO, Text, Card, Code, CodePreview, Header, Highlight, Image, Title } from '../ui/components/core'
      
const ${page.slice(0,1).toUpperCase()+page.replace(page.slice(0,1),"")} = () => {
  return (
    <>
    </>
  )
}

export default ${page.slice(0,1).toUpperCase()+page.replace(page.slice(0,1),"")}`)
    }
    } catch (e) {
      console.log("\nSomething went wrong: "+e+"\n")
    }
  }

  if (arg == undefined) {
    rl.question('What would you like your your page to be called? ', (page) => {
      console.log(`\nPage ${page} how been created in your pages directory\n`);
    
      // Close the interface after getting the input
      createPage(page)

      rl.close();
    });
  } else {
    console.log(`\nPage ${arg} how been created in your pages directory\n`);
    createPage(arg)
  }
}

function help() {
  console.log('\x1b[36m%s\x1b[0m',`Fastdocs Version ${version}:`)
  console.log("\x1b[37m","")
  console.log("npx fastdocs init | Downloads the fastdocs source code into your project at /docs")
  console.log("npx fastdocs reset | Resets all of the source code except the pages folder")
  console.log("npx fastdocs add [page] | Add a new page into your pages folder with everything ready to go.")
  console.log("npx fastdocs help | Shows this page\n")
  exit()
}

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
  } catch (err) {
    console.log("\x1b[31m","Something went wrong: "+err)
    console.log("\x1b[37m","\n")
    exit(400)
  }
}