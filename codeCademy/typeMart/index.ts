import products from "./products";

const productName : string = 'fanny pack'

function item(value) {
  return value.name === productName
}

const product = products.filter(item)

// const product = products.filter(product => product.name === productName);

console.log(product)

function pre(order) {
  let stringVal = JSON.parse(order.preOrder)
  if (stringVal) {
    console.log(order.name)
    console.log('we’ll send you a message when it’s on the way')
  }
}

const preOrder = products.filter(pre) 

console.log('test')