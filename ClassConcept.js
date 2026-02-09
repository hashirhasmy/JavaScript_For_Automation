class Car {

    constructor(name, price, model, color) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    //**Constructor overloading not possible in JS - in the run time throw error**
    // constructor(name) {
    //     this.name = name;
    // }


    refuel() {
        console.log(`${this.name} is refueling.`);
    }

}

//new keyword : to create an instance of the class (object)
//car1 = refernce variable
const car1 = new Car("Toyota", 20000, "Camry", "Red");
console.log("Car Name: " + car1.name);
console.log("Car Price: " + car1.price);
console.log("Car Model: " + car1.model);
console.log("Car Color: " + car1.color);
car1.refuel();

console.log("--------------------------------------------------");

const car2 = new Car("Honda", 25000, "Civic", "Blue");
console.log("Car Name: " + car2.name);
console.log("Car Price: " + car2.price);
console.log("Car Model: " + car2.model);
console.log("Car Color: " + car2.color);
car2.refuel();

console.log("--------------------------------------------------");

const car3 = new Car("BMW");
console.log("Car Name: " + car3.name);
console.log("Car Price: " + car3.price);
console.log("Car Model: " + car3.model);
console.log("Car Color: " + car3.color);
car3.refuel();