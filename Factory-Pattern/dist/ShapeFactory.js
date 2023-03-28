import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
export class ShapeFactory {
    getShape(shapeType) {
        if (shapeType == null) {
            return null;
        }
        if (equalsIgnoreCase(shapeType, "CIRCLE")) {
            return new Circle();
        }
        else if (equalsIgnoreCase(shapeType, "RECTANGLE")) {
            return new Rectangle();
        }
        else if (equalsIgnoreCase(shapeType, "SQUARE")) {
            return new Square();
        }
        return null;
    }
}
function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
