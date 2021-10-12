const fs = require('fs');

//const text = fs.readFileSync('./lib/collectAnswers.js', 'UTF-8');
const text = fs.readFile('./lib/collectAnswers.js', 'UTF-8', (err, text) => {
  console.log('file contents read');
  console.log(text);
});

//console.log(text);
