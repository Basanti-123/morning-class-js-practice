const myDate = () => {
  return new Date();
};

const myTime = () => {
  return new Date().getTime();
};

const getYear = () => {
  return new Date().getFullYear();
};

module.exports = { myDate, myTime, getYear };
