

greeting();

function greeting(){
    console.log("Cześć");
}

greeting();
 

//Można wywołać umieścić wywołanie funckji zarówno przed, jak i po funckji



/////////////////////////


//greeting2();

var greeting2 = function(){
    console.log("Hej");
}

greeting2();

//Jeśli w tym wypadku odwołamy się do funkcji przed jej zdefiniowaniem  nie znajdzie jej i wyrzuci "greeting2 is not a function"
