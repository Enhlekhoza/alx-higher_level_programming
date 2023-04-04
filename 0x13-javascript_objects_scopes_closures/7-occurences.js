#!/usr/bin/node
<<<<<<< HEAD
exports.nbOccurences = function (list, searchElement) {
  /* let count = 0;
  for (const element of list) {
    if (element === searchElement) {
      count++;
    }
  }
  return count; */
  const nbOccurences = list.reduce((count, value) => {
    return value === searchElement ? count + 1 : count;
  }, 0);
  return nbOccurences;
=======

exports.nbOccurences = function (list, searchElement) {
  let occurences = 0;
  for (const elem of list) {
    if (elem === searchElement) {
      occurences += 1;
    }
  }
  return (occurences);
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
};
