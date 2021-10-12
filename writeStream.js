const fs = require('fs');

const writeStream = fs.createWriteStream('./lib/myFile.txt', 'UTF-8');
const readStream = fs.createReadStream('./lib/lorem-ipsum.md', 'UTF-8');

// process.stdout.write('hello ');
// process.stdout.write('world \n');

// writeStream.write('Hello ');
// writeStream.write('World \n');

// readStream.on('data', (data) => {
//   writeStream.write(data);
// });
// process.stdin.on('data', (data) => {
//   writeStream.write(data);
// });

process.stdin.pipe(writeStream);
