#!/usr/bin/node
<<<<<<< HEAD
exports.esrever = function (list) {
  /* let end = list.length - 1;
  const mid = list.length >> 1; // calculate midpoint using bitwise right shift
  // loop through first half of array
  for (let start = 0; start < mid; start++) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    end--;
  }
  return list; */
  const reversedList = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList.push(list[i]);
  }
  return reversedList;
=======

/*
Ok, this is by far the worst algorithim I've written,
with a time Complexity of O(n)
Ill have to optimize this one :(:(:(
*/
exports.esrever = function (list) {
  const listLen = list.length;
  const newList = [];

  for (let i = listLen; i >= 0; i--) {
    newList.push(list[i]);
  }
  return (newList.slice(1, newList.length));
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
};
