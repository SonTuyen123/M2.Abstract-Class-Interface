import { Animal } from "./Animal";
import { Edible } from "./Edible";

export class Chicken extends Animal implements Edible {
    makeSound(): string {
        return "chicken: cluck-cluck";
    }
    howToEat(): string {
        return "Could be field"
    }
}