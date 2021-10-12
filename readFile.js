const fs = require('fs');

const text = fs.readFileSync('./lib/collectAnswers.js', 'UTF-8');

console.log(text);
