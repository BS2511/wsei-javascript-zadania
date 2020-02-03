// Task 1

const first = document.querySelector('.first').firstElementChild.children[2].CDATA_SECTION_NODE.answer;
console.log(first);

//Task 2

const second = document.querySelector('#second').parentElement.children[3].dataset.answer;
console.log(second);

//Task 3

const third = document.querySelector('[data-ex="third"]').parentElement.lastElementChild.children;
const result = third[Math.floor(third.length/2)].dataset.answer;
console.log(result);

//Task 4

const fourth = document.querySelector('.fourth').parentElement.querySelector('article').querySelector('p')[1].dataset.answer;
console.log(fourth);