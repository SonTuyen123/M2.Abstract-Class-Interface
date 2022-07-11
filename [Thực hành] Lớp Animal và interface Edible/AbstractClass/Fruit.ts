import { Edible } from "../a/Model/model/Edible";
export abstract class Fruit implements Edible {

    abstract howToEat(): string;

}