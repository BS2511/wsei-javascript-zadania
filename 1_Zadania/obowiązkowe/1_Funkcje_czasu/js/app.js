// exercise 1 

function countHello(){
    var numberOfRounds = Math.ceil(Math.random() * 10);
    var HowManyLeft = 1;
    console.log(numberOfRounds + "\n");
    
    var time = setInterval(function(){
        console.log("Hello " + HowManyLeft);
        HowManyLeft++;
        if(HowManyLeft == numberOfRounds + 1){
            clearInterval(time);
        }
    }) 
    
}

