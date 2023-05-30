"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
function item(value) {
    return value.name === productName;
}
var product = products_1.default.filter(item);
// const product = products.filter(product => product.name === productName)[0];
console.log(product[0].price);
