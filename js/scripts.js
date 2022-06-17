function Pizza (pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.getPrice = function () {
  let pizzaPrice = 0;
  if (this.pizzaSize === "small") {
    pizzaPrice = 10;
  } else if (this.pizzaSize === "medium") {
    pizzaPrice = 15;
  } else {
    pizzaPrice = 20;
  }
  return pizzaPrice;
}




//User Interface Logic ----

$(document).ready(function () {
  $("form#pizza-info").submit(function(event){
    event.preventDefault();
    let inputtedTopping = $("#toppings").val();
    let inputtedSize = $("#size").val();
    let newPizza = new Pizza(inputtedTopping, inputtedSize);
    console.log(newPizza);
    let price = newPizza.getPrice(inputtedSize);
    $("#topping-type").text("Toppings: " + newPizza.pizzaTopping);
    $("#size-type").text("Size: " + newPizza.pizzaSize);
    $("#pizza-price").text("$" + price + ".00");
  });
})
