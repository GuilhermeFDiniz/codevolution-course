const EventEmitter = require('node:events');

const emitter = new EventEmitter();
emitter.on("order-pizza", (size, topping) => {
  console.log('Order Received! baking a pizza', size, topping);
});

emitter.on("order-pizza", (size) => {
  if(size === "large"){
    console.log('Serving complimentary drink');
  }
});

console.log('do work');
emitter.emit("order-pizza", "large", "mushroom")
