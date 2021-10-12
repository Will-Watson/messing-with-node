const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const questions = [
//   'What is your name? ',
//   'What is your favorite programming language? ',
//   'Where do you live?',
//   'Who is your daddy and what does he do? ',
// ];

// const collectAnswers = (questions, done) => {
//   const answers = [];
//   const [firstQuestion] = questions;

//   const questionAnswered = (answer) => {
//     answers.push(answer);
//     if (answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswered);
//     } else {
//       done(answers);
//     }
//   };

//   rl.question(firstQuestion, questionAnswered);
// };

module.exports = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = (answer) => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};

// collectAnswers(questions, (answers) => {
//   console.log('Thank you for your answers; ');
//   console.log(answers);
//   process.exit();
// });
