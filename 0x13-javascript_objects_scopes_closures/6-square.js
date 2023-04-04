#!/usr/bin/node
<<<<<<< HEAD
const Square = require('./5-square');
class Square1 extends Square {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    /* This works due to the nature of my
    original print function */
    /*   print (ch = 'X') {
      for (let i = 0; i < this.height; i++) {
        console.log(ch.repeat(this.width));
      }
    } */
    super.print(c);
  }
}
module.exports = Square1;
=======
const ParentSquare = require('./5-square');

module.exports = class Square extends ParentSquare {
//   constructor (size) {
//     super(size, size);
//   }

  charPrint (c) {
    if (c !== undefined) {
      for (let i = 0; i < this.width; i++) {
        console.log(String(c).repeat(this.width));
      }
    } else {
      this.print();
    }
  }
};
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
