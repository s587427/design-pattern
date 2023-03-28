import { IAnimal } from "./IAnimal"

// 因為javascript無法implements 用extends替代

class Dog extends IAnimal {
  speak() {
    console.log("Woof")
  }
}
