const fs = require('fs');

//const files = fs.readdirSync('./lib');
console.log('started reading files');

const files = fs.readdir('./lib', (err, files) => {
  if (err) {
    throw err;
  }

  console.log('complete');
  console.log(files);
});

//console.log(files);
