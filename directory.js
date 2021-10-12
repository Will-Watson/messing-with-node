const fs = require('fs');

if (fs.existsSync('storage-fies')) {
  console.log('already there');
} else {
  fs.mkdir('storage-files', (err) => {
    if (err) {
      throw err;
    }
    console.log('directory created');
  });
}
