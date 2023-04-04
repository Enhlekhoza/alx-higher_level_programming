#!/usr/bin/node
<<<<<<< HEAD
class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print (ch = 'X') {
    for (let i = 0; i < this.height; i++) {
      console.log(ch.repeat(this.width));
=======

module.exports = class Rectangle {
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      [this.width, this.height] = [w, h];
    }
  }

  print () {
    let sizeY = this.height;
    while (sizeY > 0) {
      console.log('X'.repeat(this.width));
      sizeY -= 1;
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
    }
  }

  rotate () {
<<<<<<< HEAD
    /* alternative solution 1
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
    alternative solution 2
    this.width = this.width ^ this.height;
    this.height = this.width ^ this.height;
    this.width = this.width ^ this.height; */
    // 1 liners :)
    [this.width, this.height] = [this.height, this.width];
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}
module.exports = Rectangle;
=======
    const tempHeight = this.height;
    this.height = this.width;
    this.width = tempHeight;
  }

  double () {
    [this.width, this.height] = [this.width, this.height]
      .map(prop => prop * 2);
  }
};
>>>>>>> 91ff262bc8904c83af54575db08b4e673926dccf
