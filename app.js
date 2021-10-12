// const counter = require('./myModule');

// counter.inc();
// counter.inc();
// counter.inc();

const { inc, dec, getCount } = require('./myModule');

inc();
inc();
inc();

dec();

//console.log(counter.getCount());
console.log(getCount());
