var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function(newA,newB){
        newA += newB;
    },
    multiply: function(newA, newB){
        newA *= newB;
    }
    

};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
