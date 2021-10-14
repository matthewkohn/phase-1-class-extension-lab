// Your code here
class Polygon {
  constructor(arrayOfSides) {
    this.arrayOfSides = arrayOfSides;
  }
  get countSides() {
    return this.arrayOfSides.length;
  }
  get perimeter() {
    return this.arrayOfSides.reduce((prev, current) => prev + current);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.arrayOfSides.length = 3) {
      const side1 = this.arrayOfSides[0];
      const side2 = this.arrayOfSides[1];
      const side3 = this.arrayOfSides[2];
      return (side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2);
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.arrayOfSides.length = 4) {
      const side1 = this.arrayOfSides[0];
      const side2 = this.arrayOfSides[1];
      const side3 = this.arrayOfSides[2];
      const side4 = this.arrayOfSides[3];
      return (side1 === side2) && (side1 === side3) && (side1 === side4);
    }
  }
  get area() {
    if (this.isValid) {
      return (this.arrayOfSides[0] * this.arrayOfSides[0]);
    }
  }
}