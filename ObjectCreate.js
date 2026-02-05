//1. Object literals : {}
const user = {
    name: "Alice",
    age: 30,
    email: "test@example.com"
}
console.log("Name: " + user.name);
console.log("Age: " + user["age"]);

//2. Constructor function
function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}
const person1 = new Person("Bob", 25, "bob@example.com");
const person2 = new Person("Charlie", 28, "charlie@example.com");
console.log("Name: " + person1.name + " Age: " + person1.age);
console.log("Name: " + person2.name + " Age: " + person2.age);

//3. Class style:
class Customer {
    constructor(name, product) {
        this.name = name;       //Instance variable
        this.product = product;
    }

    addtoCart() {
        console.log(`${this.name} added ${this.product} to the cart.`);
    }
}

const customer1 = new Customer("David", "Laptop");
console.log("Customer Name: " + customer1.name);
customer1.addtoCart();


//4. Object.create() method : creates a new object with the specified prototype object and properties.
const animal = {
    type: "Mammal",
    sound: function() {
        console.log(`Animal sound is ${this.animalsound}`);
    }
};
const dog = Object.create(animal);
dog.breed = "Labrador";
dog.animalsound = "Miyav Miyav";
console.log("Type: " + dog.type);
console.log("Breed: " + dog.breed);
dog.sound();

//5. Using Factory Functions : returns a new object
function createBook(title, author) {
    return {
        title: title,
        author: author,
        getDetails: function() {
            console.log(`${this.title} by ${this.author}`);
        }
    };
}

const book1 = createBook("1984", "George Orwell");
const book2 = createBook("To Kill a Mockingbird", "Harper Lee");
book1.getDetails();
book2.getDetails();
console.log("Book1 Title: " + book1.title + " Author: " + book1.author);


console.log("---------------- Object concepts----------------");

let obj = {
    name: "Hashir",
    age: 26,   
    dob: "1999-05-03"
};

console.log("Name: " + obj.name); //Accessing using dot notation
console.log("Age: " + obj["age"]); //Accessing using bracket notation

obj.email = "hashir@example.com"; //Adding new property
console.log("Email: " + obj.email);

obj.age = 27; //Modifying existing property
console.log("Updated Age: " + obj.age);

delete obj.dob; //Deleting property
console.log("DOB after deletion: " + obj.dob); //undefined

let obj2 = {
    state : "California",
    country : "USA"
};

//Merging obj2 into obj
obj.fulladdress = obj2;
console.log("Full Address: " + JSON.stringify(obj.fulladdress));

obj.myFamily = ["Alice", "Bob", "Charlie"]; //Adding an array property
console.log(obj);

console.log("Family Member 1: " + obj.myFamily[0]); //Accessing array 
console.log("Family Member 2: " + obj.fulladdress.country); //Accessing object value