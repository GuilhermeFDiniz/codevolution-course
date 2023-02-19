const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log('Order', size, topping);
  drinkMachine.serveDrink(size)
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

// const EventEmitter = require('node:events');

// const emitter = new EventEmitter();
// emitter.on("order-pizza", (size, topping) => {
//   console.log('Order Received! baking a pizza', size, topping);
// });

// emitter.on("order-pizza", (size) => {
//   if(size === "large"){
//     console.log('Serving complimentary drink');
//   }
// });

// console.log('do work');
// emitter.emit("order-pizza", "large", "mushroom")
