"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("../products");
var productName = 'fanny pack';
function item(value) {
    return value.name === productName;
}
var product = products_1.default.filter(item);
// const product = products.filter(product => product.name === productName);
console.log(product);
function pre(order) {
    var stringVal = JSON.parse(order.preOrder);
    if (stringVal) {
        console.log(order.name);
        console.log('we’ll send you a message when it’s on the way');
    }
}
var preOrder = products_1.default.filter(pre);
