#!/usr/bin/node
<<<<<<< HEAD
module.exports = class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
=======

module.exports = class Rectangle {
  constructor (w, h) {
    if (!(w < 1) || (h < 1)) {
      this.width = w;
      this.height = h;
    }
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
  }
};
