const cp = require('child_process');

const questionApp = cp.spawn('node', ['questions.js']);

questionApp.stdin.write('Will \n');
questionApp.stdin.write('JavaScript \n');
questionApp.stdin.write('Queens, New York \n');
questionApp.stdin.write('Sleep \n');

questionApp.stdout.on('data', (data) => {
  console.log(`from the question app: ${data}`);
});

questionApp.on('close', () => {
  console.log(`questionApp process exited`);
});
