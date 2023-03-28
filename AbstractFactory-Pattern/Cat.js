import { IAnimal } from "./IAnimal"

// 因為javascript無法implements 用extends替代
class Cat extends IAnimal {
  speak() {
    console.log("Meow")
  }
}
