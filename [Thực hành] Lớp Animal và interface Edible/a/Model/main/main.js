"use strict";
exports.__esModule = true;
var Tiger_1 = require("../model/Tiger");
var Chicken_1 = require("../model/Chicken");
[];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howToEat());
    }
});
console.log('---Fruits-----');
var fruits = [];
fruits[0] = new Apple();
fruits[1] = new Orange();
fruits.forEach(function (item) {
    console.log(item.howToEat());
});
