import products from "./products";

const productName : string = 'fanny pack'

function item(value) {
  return value.name === productName
}

const product = products.filter(item)

// const product = products.filter(product => product.name === productName)[0];

console.log(product)

