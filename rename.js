const fs = require('fs');

fs.renameSync('./lib/colors.json', './lib/colorData.json');

fs.rename('./lib/notes.md', './storage-files/nodes.md', (err) => {
  if (err) {
    throw err;
  }
});

setTimeout(() => {
  fs.unlinkSync('./lib/william.js');
}, 4000);
