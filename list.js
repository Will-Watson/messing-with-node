const fs = require('fs');

const files = fs.readdirSync('./lib');

console.log(files);
