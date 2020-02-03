document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    
  // Task 0
  function getDatasInfo(elements) {
    var e = [];
    for (let index = 0; index < elements.length; index++) {
      e.push(elements[index].dataset.color);
      return e;
    }
  }
  console.log(getDatasInfo(links));

  // Task 1
  function writeElements(e2) {
    if (e2.length === undefined) {
      console.log(e2);
      console.log("Class name: " + e2.className);
      console.log("Tag name: " + e2.tagName);
    } else {
      Array.from(e2).forEach(item => {
        console.log(item);
        if (item.className != "") console.log("Class name: " + item.className);
        console.log("Tag name: " + item.tagName);
      });
    }
  }
  writeElements(homeElement);
  writeElements(childElements);
  writeElements(banner);
  writeElements(blocks);
  writeElements(links);

  // TAsk 2
  for (let e3 = 0; e3 < blocks.length; e3++) {
    console.log(blocks[e3].innerHTML);
    console.log(blocks[e3].outerHTML); 
    blocks[e3].innerHTML = "Nowa wartość diva o klasie blocks";
    console.log(blocks[e3].innerHTML); 
  }

  // Task 3
  var footer = document.getElementById("mainFooter");

  function getId(element) {
    let id = element.id;
    return id;
  }
  console.log(getId(footer));

  // Task 4
  function getTags(elements) {
    var childEL = [];
    Array.from(elements).forEach(item => {
      childEL.push(item.tagName);
    });
    return childEL;
  }
  console.log(getTags(childElements));

  // Task 5
  function getClassInfo(element) {
    var ban = [];
    if (element.length === undefined) {
      ban.push(element.className);
    } else {
      Array.from(elements).forEach(item => {
        ban.push(item.className);
      });
    }
    return ban;
  }
  console.log(getClassInfo(banner));

  // Task 6
  var e4 = document.querySelectorAll("nav li");
  function setDataDirection(elements) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].dataset.direction == undefined) {
        elements[i].dataset.direction = "top";
      }
    }
  }
  setDataDirection(e4);
});
