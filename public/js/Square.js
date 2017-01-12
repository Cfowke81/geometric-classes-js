class Square {
  constructor(length, x=0, y=0) {
  this.length = length;
  this.x = x;
  this.y = y;
  }

  area () {
    return Math.pow(this.length, 2);
  }

  perimeter() {
    return this.length * 4;
  }

  containsPoint(x,y) {
    let delta = this.length / 2;

    if(((this.x - delta <= x) && (x <= this.x + delta)) &&
    ((this.y - delta <= y) && (y <= this.y + delta))) {
    return true;
    }
    return false;
    }
};
