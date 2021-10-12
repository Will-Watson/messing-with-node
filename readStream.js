const fs = require('fs');

const readStream = fs.createReadStream('./lib/lorem-ipsum.md', 'UTF-8');

console.log('type something.... ');
readStream.on('data', (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
});
// console.log('type something.... ');
// process.stdin.on('data', (data) => {
//   console.log(`I read ${data.length - 1} characters of text`);
// });
