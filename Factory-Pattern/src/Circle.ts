import { IShape } from "./IShape"

export class Circle implements IShape {
  draw() {
    console.log("I am Circle and doing draw")
  }
}
