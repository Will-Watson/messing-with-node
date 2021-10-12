const collectAnswers = require('./lib/collectAnswers');

const questions = [
  'What is your name? ',
  'What is your favorite programming language? ',
  'Where do you live?',
  'Who is your daddy and what does he do? ',
];

const answerEvents = collectAnswers(questions);

answerEvents.on('answer', (answer) =>
  console.log(`questions answered: ${answer}`)
);

answerEvents.on('complete', (answers) => {
  console.log('Thank you for your answers; ');
  console.log(answers);
});

answerEvents.on('complete', () => process.exit());
