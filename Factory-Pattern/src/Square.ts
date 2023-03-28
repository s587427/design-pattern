import { IShape } from "./IShape"

export class Square implements IShape {
  draw() {
    console.log("I am Square and doing draw")
  }
}
