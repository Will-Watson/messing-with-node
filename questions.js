const readline = require('readline');

const questions = [
  'What is your name? ',
  'What is your favorite programming language? ',
  'Who is your daddy and what does he do? ',
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.questions('how was your day? ', (answer) => {
  console.log(`Your anser: ${answer}`);
});
