import { Shape } from "./Shape";
import { Resizeable } from './resizeable'

export class Rectangle extends Shape implements Resizeable, Colorable {
    width: number;
    height: number;
    length: number;

    constructor(width: number,
        height: number,
        name: string) {
        super(name);
        this.width = width;

        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    resize(percent: number) {
        return this.width *= percent, this.length *= percent
    }
    Colorable(): string {
        return 'I love you, I love you, I love you, I love you, I love'
    }
}
