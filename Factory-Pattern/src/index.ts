import { Circle } from "./Circle"
import { Rectangle } from "./Rectangle"
import { ShapeFactory } from "./ShapeFactory"
import { Square } from "./Square"

const shapeFactory: ShapeFactory = new ShapeFactory()

//獲取 Circle 的對象，並調用它的 draw 方法
const shape1 = shapeFactory.getShape("CIRCLE") as Circle
//調用 Circle 的 draw 方法
shape1.draw()

//獲取 Rectangle 的對象，並調用它的 draw 方法
const shape2 = shapeFactory.getShape("RECTANGLE") as Rectangle
//調用 Rectangle 的 draw 方法
shape2.draw()

//獲取 Square 的對象，並調用它的 draw 方法
const shape3 = shapeFactory.getShape("SQUARE") as Square

//調用 Square 的 draw 方法
shape3.draw()
