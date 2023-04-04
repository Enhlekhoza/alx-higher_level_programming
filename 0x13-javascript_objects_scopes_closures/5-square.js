#!/usr/bin/node
<<<<<<< HEAD
const Rectangle = require('./4-rectangle');
class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}
module.exports = Square;
=======

const Rectangle = require('./4-rectangle');

module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
};
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
