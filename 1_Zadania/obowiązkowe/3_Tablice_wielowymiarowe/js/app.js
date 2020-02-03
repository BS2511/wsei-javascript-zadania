
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Exercise 0

function checkArray(array2d){
    for(var i = 0; i < array2d.length; i++){
        for(var j = 0; j < array2d[i].length ; j++){
            if(array2d[i][j]%2 == 0){
                array2d[i] = true;
            }
            else{
                array2d[i] = false;
            }
        }
    }
    return array2d;
}


//Exercise 1

function ex1(task2Array){
    console.log(task2Array[2][1]);
    console.log(task2Array[1].length);
    console.log(task2Array[1][3]);
}



//Exercise 2

function ex2(task2Array){
    for(var i = 0; i < task2Array[0].length; i++){
        console.log(task2Array[0][i]);
    }
    console.log("\n");
    for(var i = 0; i < task2Array[1].length;i++){
        console.log(task2Array[1][i]);
    }
    console.log("\n");
    // second for loop ???
    for(var i = 0; i < task2Array.length; i++){
        for(var j = 0; j < task2Array[i].length; j++){
            console.log(task2Array[i][j]);
        }
    }
}

//Exercise 3

function print2DArray(array2d){
    for(var i = 0; i < array2d.length; i++){
        for(var j = 0; j < array2d[i].length; j++){
            console.log(array2d[i][j]);
        }
    }
}

//Exercise 4

function ex4(){
    ex4Array = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    print2DArray(ex4Array);
}

//Exercise 5

function create2DArray(rows,columns){
    var array2D = [];
    var number = 1;
    for(var i = 0; i< rows; i++){ 
        for(var j = 0; j < columns; j++){
            array2D[i][j] =  number;
            number++;
        }
    }
    for(var i = 0; i< rows; i++){
        for(var j = 0; j < columns; j++){
            console.log(array2D[i][j]);
        }
    }
    
}

//simpler ex5 

function sim(rows){
    var array = [];
    for(var i = 0; i < rows; i++){
        array[i] = i; 
    }
    for(var i = 0; i < rows; i++){
        console.log(array[i]);
    }
}







