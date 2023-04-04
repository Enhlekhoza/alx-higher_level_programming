#!/usr/bin/node
<<<<<<< HEAD
module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
=======

module.exports = class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      [this.width, this.height] = [w, h];
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
    }
  }
};
