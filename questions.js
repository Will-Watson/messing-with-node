const collectAnswers = require('./lib/collectAnswers');

const questions = [
  'What is your name? ',
  'What is your favorite programming language? ',
  'Where do you live?',
  'Who is your daddy and what does he do? ',
];

collectAnswers(questions, (answers) => {
  console.log('Thank you for your answers; ');
  console.log(answers);
  process.exit();
});

// collectAnswers(questions);
