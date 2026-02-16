//multiple inheritance is not supported in JavaScript.
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    useHorn() {
        return `${this.make} ${this.model} horn is being used.`;
    }
}


//parent class (superclass)
class Person extends Vehicle {
    constructor(name, age) {
        super('Vehicle', 'Toyota'); // Call the Vehicle constructor
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    startEngine() {
        return `${this.name} is starting the engine.`;
    }

    stopEngine() {
        return `${this.name} is stopping the engine.`;
    }
}

//child class (subClass) that inherits from Person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // call the parent class constructor
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying and is in grade ${this.grade}.`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // call the parent class constructor
        this.subject = subject;
    }
    teach() {
        return `${this.name} is teaching ${this.subject}.`;
    }
}

// Create instances of Student and Teacher
const student1 = new Student('Alice', 20, 'A');
const teacher1 = new Teacher('Mr. Smith', 40, 'Mathematics');
// Test the methods
console.log(student1.introduce());
console.log(student1.study());
console.log(teacher1.introduce());
console.log(teacher1.teach());
console.log(student1.startEngine());
console.log(teacher1.stopEngine());
console.log(student1.useHorn());
console.log(student1.model); // Accessing inherited property from Vehicle class




