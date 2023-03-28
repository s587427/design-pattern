// 對於 Node.js 中的 ES6 模塊，您需要在導入語句中包含完整的文件路徑，包括文件擴展名
import { ShapeFactory } from "./ShapeFactory.js"
const shapeFactory = new ShapeFactory()
//獲取 Circle 的對象，並調用它的 draw 方法
const shape1 = shapeFactory.getShape("CIRCLE")
//調用 Circle 的 draw 方法
shape1.draw()
//獲取 Rectangle 的對象，並調用它的 draw 方法
const shape2 = shapeFactory.getShape("RECTANGLE")
//調用 Rectangle 的 draw 方法
shape2.draw()
//獲取 Square 的對象，並調用它的 draw 方法
const shape3 = shapeFactory.getShape("SQUARE")
//調用 Square 的 draw 方法
shape3.draw()
