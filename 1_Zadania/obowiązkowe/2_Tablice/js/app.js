

//Exercise 0

function distFromAvarage(array = []){
    var sum = 0;
    for(var i = 0 ;i < array.length; i++){
        sum += array[i];
    }
    var avg = sum/array.length;
    for(var i = 0; i < array.length; i++){
        array[i] -= avg;
        if(array[i] < 0){
            array[i] *= -1;
        }
        else{
            continue;
        }
    }
    return array;
}
/* 
    function distfroAverage(t = []){
        const sum = t.reduce(
            (sum,el) => {
                return sum += el;

            }
        )
        const avg = sum
        t.map = (el => el - avg)
    }
*/

//Exercise 1

function myFavouriteFruits(){
    var favouriteFruits = ["Apple", "Grapes", "Watermelon","Blueberries"];
    console.log(favouriteFruits[0]);
    console.log(favouriteFruits[favouriteFruits.length - 1]);
    for(var i = 0; i <= favouriteFruits.length-1; i++){
        console.log(favouriteFruits[i]);
    }
}
//Exercise 3

function printTable(array = []){
    for(var i = 0; i <= array.length -1; i++){
        console.log(array[i]);
    }
}

//Exercise 4

function multiply(array = []){
    var valueholder = 1;
    for(var i = 0; i <= array.length - 1; i++){
        valueholder *= array[i];
    }
    return valueholder;
}

//Exercise 5

function getEvenAverage(array = []){
    var sum = 0;
    var numberOfEvenNumbers = 0;
    for(var i = 0; i <= array.length-1; i++){
        if(array[i]%2 == 0){
            sum += array[i];
            numberOfEvenNumbers++;
        }
        else{
            continue;
        }
    }
    if(sum == 0){
        return null;
    }
    else if((sum/numberOfEvenNumbers)%1 != 0){
        return Math.floor((sum/numberOfEvenNumbers * 1000) ) / 1000;
    }
    else{
        return sum/numberOfEvenNumbers;
    }
}
//Exercise 6

function sortArrays(array){
    //checking if there are only whole numbers in an array
    for(var i = 0; i <= array.length - 1; i++){
        if(array[i]%1 == 0){
            continue;
        }
        else
        {
            return "Array can contain only whole numbers";
        }
    }
    //bubble sorting an array
    var swapp;
    var n = array.length - 1;
    do{
        swapp = false;
        for(var i = 0; i <= n; i++){
            if(array[i] > array[i+1]){
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapp = true;
            }
        }
        n--;
    }while(swapp);
    return array;
}

//Exercise 7 

function addArrays(array1,array2){
    for(var i = 0; i <= array1.length - 1; i++){
        if(array1[i]%1 == 0){}
        else{
            return "Array can contain only whole numbers";
        }}
    for(var i = 0; i <= array2.length - 1; i++){
        if(array2[i]%1 == 0){}
        else{
            return "Array can contain only whole numbers";
        }}
    if(array1.length >= array2.length){
        for(var i = 0; i <=array1.length - 1; i++){
            if(array2[i] == null){
                continue;}
            else{
                array1[i] += array2[i]}
        }
        return array1;
    }
    else{
        for(var i = 0; i <= array2.length - 1; i++){
            if(array1[i] == null){
                continue;}
            else{
                array2[i] += array1[i]}
        }
    }
    return array2;
}