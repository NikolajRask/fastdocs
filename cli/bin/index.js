#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const version = fs.readFileSync(path.join(__dirname, "./logs/version.txt"),'utf-8').replace("latest version: ", "").trim()

// console.log('\x1b[36m%s\x1b[0m',`

//         ______                   __        __                             
//        / ____/  ____ _   _____  / /_  ____/ /  ____   _____   _____       
//       / /_     / __  /  / ___/ / __/ / __  /  / __ \ / ___/  / ___/       
//      / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ // /__   (__  )        
//     /_/       \__,_/  /____/  \__/  \__,_/   \____/ \___/  /____/         
 

// `)

writeLogo(380)



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
    console.log("Something went wrong: "+err)
  }
}

// Define the folder inside your bin directory you want to copy
const folderToCopy = path.join(__dirname, './template/v1.0'); // Replace 'folderName' with your folder

// Get the current working directory (where the CLI is invoked)
const targetDirectory = process.cwd(); // This will give you the directory where the command is run

// Copy the folder to the target directory
copyDirectory(folderToCopy, path.join(targetDirectory, "./src"));


let logoStages = [
`\r
\r
\r        ______           
\r       / ____/        
\r      / /_        
\r     / __/      ______
\r    /_/        |______|      
\r 
\r
\r`,
`\r
\r
\r        ______                                            
\r       / ____/  ____ _     
\r      / /_     / __  /       
\r     / __/    / /_/ /   ______      
\r    /_/       \__,_/   |______|    
\r 
\r
\r`,
`\r
\r    
\r        ______                        
\r       / ____/  ____ _   _____       
\r      / /_     / __  /  / ___/     
\r     / __/    / /_/ /  (__  )     
\r    /_/       \__,_/  /____/   |______|       
\r 
\r
\r`,
`\r
\r
\r        ______                   __                                   
\r       / ____/  ____ _   _____  / /_      
\r      / /_     / __  /  / ___/ / __/       
\r     / __/    / /_/ /  (__  ) / /_        
\r    /_/       \__,_/  /____/  \__/   |______|     
\r 
\r
\r`,
`\r
\r
\r        ______                   __        __                             
\r       / ____/  ____ _   _____  / /_  ____/ /       
\r      / /_     / __  /  / ___/ / __/ / __  /       
\r     / __/    / /_/ /  (__  ) / /_  / /_/ /         
\r    /_/       \__,_/  /____/  \__/  \__,_/   |______|       
\r 
\r
\r`,
`\r
\r
\r        ______                   __        __                             
\r       / ____/  ____ _   _____  / /_  ____/ /  ____         
\r      / /_     / __  /  / ___/ / __/ / __  /  / __ \        
\r     / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ /        
\r    /_/       \__,_/  /____/  \__/  \__,_/   \____/ |______|        
\r 
\r
\r`,
`\r
\r
\r        ______                   __        __                             
\r       / ____/  ____ _   _____  / /_  ____/ /  ____   _____        
\r      / /_     / __  /  / ___/ / __/ / __  /  / __ \ / ___/        
\r     / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ // /__          
\r    /_/       \__,_/  /____/  \__/  \__,_/   \____/ \___/   |______|        
\r 
\r
\r`,
`\r
\r
\r        ______                   __        __                             
\r       / ____/  ____ _   _____  / /_  ____/ /  ____   _____   _____       
\r      / /_     / __  /  / ___/ / __/ / __  /  / __ \ / ___/  / ___/       
\r     / __/    / /_/ /  (__  ) / /_  / /_/ /  / /_/ // /__   (__  )        
\r    /_/       \__,_/  /____/  \__/  \__,_/   \____/ \___/  /____/         
\r 
\r
\r`
]

function writeLogo(speed) {

    let i = 0

    const logoInterval = setInterval(() => {
        process.stdout.write(`\r${logoStages[i]}`)
        i++
    }, speed)

    setTimeout(() => {
        clearInterval(logoInterval)
    }, speed*9)

    
//     console.log("\x1b[32m", `\nFastdocs ${version}:`)
//     console.log("\x1b[37m", "\n\nInitializing into your Next.js Project\n")
    
//     const spinnerChars = ['|', '/', '-', '\\'];
//     let current = 0;
//     let message = "Loading files..."
    
//     // Start the spinner
//     const spinner = setInterval(() => {
//       process.stdout.write(`\r${spinnerChars[current++]} ${message}`);  // \r returns the cursor to the beginning of the line
//       current %= spinnerChars.length;  // Reset to 0 when reaching the end of the array
//     }, 100);  // Update every 100 milliseconds
    
//     // Stop the spinner after 5 seconds (for demo purposes)
//     setTimeout(() => {
//         message = ""
//         clearInterval(spinner);  // Stop the spinner
//         process.stdout.write('\rDone!                            \n');  // Clear spinner and show "Done"
//         process.stdout.write("\r\nThank you for using Fastdocs as your documentation library,\nI hope you enjoy using it.")
//         console.log('\x1b[36m%s\x1b[0m', '\n\n\r- \x1b]8;;https://x.com/nkjrask\x1b\\@nkjrask\x1b]8;;\x1b\\')
//         process.stdout.write('\nFor documentation, check out: ')
//         console.log('\x1b[36m%s\x1b[0m', "\nhttps://fastdocs.dev/docs")
//     }, speed*10);
}