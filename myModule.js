let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => {
  return count;
};

module.exports = {
  inc,
  dec,
  getCount,
};
