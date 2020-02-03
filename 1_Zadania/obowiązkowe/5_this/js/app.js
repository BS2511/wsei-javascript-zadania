

// Task 0

var car = {
    brand: "Mercedes",
    color: "Black",
    numberOfKilometers: 0,
    printCarinfo: function(){
        return this.color +" "+ this.brand + ", " + this.numberOfKilometers + "km";
    },
    drive: function(kmDriven){
        this.numberOfKilometers += kmDriven;
    }
};

// Task 1

car.carInspection = ["January 3rd, 2019", "January 2nd, 2019"];

car.newCarInspection = function(newnote){
    this.carInspection += newnote;
}

//źle
car.returnAllInspections = function(){
    for(x in carInspection){
        return this.carInspection[x];
    }
}

//Task 3

var stairs = {
    step: 0,
    up: function(){
        this.step += 1;
    },
    down: function(){
        this.step -= 1;
    },
    printStep: function(){
        return this.step;
    }

};