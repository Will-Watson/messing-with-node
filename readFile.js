const fs = require('fs');

//const text = fs.readFileSync('./lib/collectAnswers.js', 'UTF-8');

//if it were an image, or binary, file you wouldnt have to specifiy UTF-8

const text = fs.readFile('./lib/collectAnswers.js', 'UTF-8', (err, text) => {
  if (err) {
    console.log(`an error has occured: ${err.message}`);
    process.exit();
  }

  console.log('file contents read');
  console.log(text);
});

//console.log(text);
