const fs = require('fs');

const writeStream = fs.createWriteStream('./lib/myFile.txt', 'UTF-8');

// process.stdout.write('hello ');
// process.stdout.write('world \n');

writeStream.write('Hello ');
writeStream.write('World \n');
