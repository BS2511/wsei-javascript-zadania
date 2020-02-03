
// Task 0
var i = 0;

function Basket(products,sum,addProduct,showBasket)  {
    this.products = [""];
    this.sum = 0,
    this.addProduct = function(name,price){
        this.products[i] = name;
        i++;
        this.sum += price;
    };
    this.showBasket = function(){
        return this.products + " " + this.sum;
        
    }

};

// Task 2

function Calculator() {
    this.operations = [];
    return this;
  }
  Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.operations.push(num1 + " + " + num2 + " = " + result);
  };
  Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.operations.push(num1 + " * " + num2 + " = " + result);
  };
  Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;
    this.operations.push(num1 + " - " + num2 + " = " + result);
  };
  Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    this.operations.push(num1 + " / " + num2 + " = " + result);
  };
  Calculator.prototype.printOperations = function() {
    for (const el in this.operations) {
      console.log(this.operations[el]);
    }
  };
  Calculator.prototype.clearOperations = function() {
    this.operations = [];
  };