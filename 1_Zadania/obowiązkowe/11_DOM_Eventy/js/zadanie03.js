window.addEventListener("DOMContentLoaded", () => {
    const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
    const counters = Array.from(document.querySelectorAll(".counter"));
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        const value = parseInt(counters[i].innerText);
        counters[i].innerText = 1 + value;
      });
    });
  });