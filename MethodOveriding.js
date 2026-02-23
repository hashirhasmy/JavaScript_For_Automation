class car{

    constructor(name,model){
        this.name=name;
        this.model=model;
        this.minSpeed=20;
        this.maxSpeed=200;
    }

    startEngine(){
        console.log("Engine started");
    }
}


class Audi extends car{
    constructor(name,model){
        super(name,model);
        this.minSpeed=30; // Overriding the minSpeed property
    }

    // Overriding the startEngine method
    startEngine(){
        console.log("Audi engine started");
    }
}

let myCar=new car("Toyota","Camry");
myCar.startEngine(); // Output: Engine started

let myAudi=new Audi("Audi","A4");
myAudi.startEngine(); // Output: Audi engine started
console.log(myAudi.minSpeed); // Output: 30