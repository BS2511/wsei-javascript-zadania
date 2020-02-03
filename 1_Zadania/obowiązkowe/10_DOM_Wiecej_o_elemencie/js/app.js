document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
     // task 0
    var el = document.querySelectorAll(".ex5 ul li");
    for (var i = 0; i < el; i++) {
        var x = i + 1;
        if (x % 2 == 0) {
        el[i].style["background-color"] = "green";
        }
        if (x == 5) {
        el[i].classList.add("big");
        }
        if (x % 3 == 0) {
        el[i].style["border-bottom"] = "2px solid red";
        }
    }

    // task 1
    var chrome = document.querySelector(".chrome");
    chrome.nextSibling.nextSibling.innerText = "Chrome";
    chrome.style.width = "100px";
    var edge = document.querySelector(".edge");
    edge.nextSibling.nextSibling.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    edge.style.backgroundImage = "url('./assets/img/edge.png')";
    var firefox = document.querySelector(".firefox");
    firefox.nextSibling.nextSibling.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");
    firefox.nextSibling.nextSibling.innerText = "Firefox";
    firefox.style.backgroundImage = "url('./assets/img/firefox.png')";

    // task 2
    var name = document.getElementById("name");
    var color = document.getElementById("fav_color");
    var meal = document.getElementById("fav_meal");
    name.innerHTML = "Blazej Sz";
    color.innerHTML = "czarny";
    meal.innerHTML = "pierogi";

    // task 3
    document.querySelector(".ex3 ul").classList.add("menu");
    var DOM_liEx3 = document.querySelectorAll(".ex3 ul li");
    for (let index = 0; index < DOM_liEx3.length; index++) {
        DOM_liEx3[index].classList.add("menuElement");
        if (DOM_liEx3[index].classList.contains("error")) {
        DOM_liEx3[index].classList.remove("error");
        }
    }
    
    //task 4
    const lst = document.querySelectorAll(".ex4 ul li");
    for(let i = 0; i < lst.length; i++){
    if(i%2==0){
    lst[i].dataset.id = i;
    }

    }
});