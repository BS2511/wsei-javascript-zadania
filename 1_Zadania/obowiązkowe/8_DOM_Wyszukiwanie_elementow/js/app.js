document.addEventListener("DOMContentLoaded", function () {
    
  // Task 0
  let el = document.querySelector(".title");
  function getDataAnimation(element) {
    let x = element.dataset.animation;
    return x;
  }
  getDataAnimation(el);

  // Task 1
  var home = document.getElementById("#home");
  console.log(home);

  var differentHome = document.querySelector("home");
  console.log(differentHome);

  var dataDirection = document.querySelector("[data-direction]");
  console.log(dataDirection);

  var block = document.querySelector(".block");
  console.log(block);

  // Task 2
  var e = document.querySelectorAll("nav li");
  console.log(e);
  console.log("Quantity: " + e.length);

  var e2 = document.querySelectorAll("div p");
  console.log(e2);
  console.log("Quantity: " + e2.length);
  
  var e3 = document.querySelectorAll("article div");
  console.log(e3);
  console.log("Quantity: " + e3.length);

  // Task 3
  var first = document.getElementsByClassName("first");
  console.log(first);
  console.log("Quantity: " + first.length);

  var h1 = document.querySelectorAll("article.first h1");
  console.log("Quantity: " + h1.length);});
