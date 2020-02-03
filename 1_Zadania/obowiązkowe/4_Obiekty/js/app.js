var a  = {
    u:2,
    b: [7,4]
};
var b = {
    c: "...hkk...",
    d: "...."
};
var ob = {
    d:"..",
    e: a,
    f: b
};
var ob1 = {ob};
b = {k: "sdas"}; 
console.log(b);
console.log(ob1);
//HasOWn property !!!!

b.hasOwnProperty(d);

//Task 0a

var country = {
    capital: "capital" ,
    population: 1 ,
    president: "president",
    primeMinisters: ['stringTable']
};
//console.log(country);
for(var i = 0; i < console.log(Object.keys(country).length); i++){
    console.log(country);
}



// Task 0b
var timeMachine = {
    shape: "string",
    model: "model",
    run: [
        {
            date: "2015-02-02",
            place:"Bochnia"
        }
    ]
};
console.log(timeMachine);

console.log(timeMachine.shape);
console.log(timeMachine.model);
console.log(timeMachine.run);

// Task 1

var book = {
    title: "Men Who Hate Women",
    author: "Stieg Larsson",
    numberOfPages: 633
};

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);








// Task 2

var person = {
    name: "Arthur",
    age: 47,
    sayHello: function(){
        return "hello";
    }
}












/*
console.log(person.name);
console.log(person.age);
console.log(person.sayHello());

//Task 3

var recipe = {
    title: "banana bread",
    serving: 3
};

recipe.ingredients = ["flour","banana","yeast"];

console.log(recipe.title);
console.log(recipe.serving);
console.log(recipe.ingredients);

// Task 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist); */