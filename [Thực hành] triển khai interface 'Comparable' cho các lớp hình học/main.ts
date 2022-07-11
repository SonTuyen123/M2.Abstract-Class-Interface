import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Square } from "./Squere";


let a = new Rectangle(100, 50, 'aaaaa');

console.log(a.calculateArea());

// console.log(a.calculatePerimeter());

a.resize((Math.floor(Math.random() * 100) + 1) / 100);

console.log(a.calculateArea());


