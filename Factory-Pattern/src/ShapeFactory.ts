import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

export class ShapeFactory{
    public getShape(shapeType: string){
        if(shapeType == null){
            return null;
        }
        if(equalsIgnoreCase(shapeType, "CIRCLE")){
            return new Circle();
        }else if(equalsIgnoreCase(shapeType, "RECTANGLE")){
            return new Rectangle();
        }else if(equalsIgnoreCase(shapeType, "SQUARE")){
            return new Square();
        }
        return null;

    }
}


function equalsIgnoreCase(str1: string, str2: string) {
    return str1.toLowerCase() === str2.toLowerCase();
}