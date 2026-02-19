class car {
    static wheels = 4;

    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    static stop() {
        console.log("car stopped");
    }

    drive() {
        console.log(`${this.name} is driving`);
    }
    
}

const c1 = new car("BMW", "X5", 50000);
console.log(`${c1.name} , ${c1.model} , ${c1.price}, ${car.wheels}`);

car.stop();
c1.drive();

//static variable and static method can be accessed without creating an object of the class. We can access static variable and static method using class name. 
// Static members are shared among all instances of the class.

//non static members are instance members, they are specific to each instance of the class. 
// We need to create an object of the class to access non-static members. Non-static members are not shared among instances of the class.