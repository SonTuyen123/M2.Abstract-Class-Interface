"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var a = new Rectangle_1.Rectangle(100, 50, 'aaaaa');
console.log(a.calculateArea());
// console.log(a.calculatePerimeter());
a.resize((Math.floor(Math.random() * 100) + 1));
console.log(a.calculateArea());
