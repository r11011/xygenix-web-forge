
const { exec } = require('child_process');
const path = require('path');

const serverPath = path.join(__dirname, 'api.ts');

// Use ts-node to run the TypeScript server file
const server = exec(`npx ts-node ${serverPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
    return;
  }
  console.log(`Server output: ${stdout}`);
  if (stderr) {
    console.error(`Server errors: ${stderr}`);
  }
});

server.stdout.on('data', (data) => {
  console.log(`Server: ${data}`);
});

server.stderr.on('data', (data) => {
  console.error(`Server error: ${data}`);
});
