class Governor {
    static termLength = 4;
    static party = 'Independent';

    static performDuties() {
    console.log('Governor performing duties');
    }
}

console.log(Governor.termLength); 
console.log(Governor.party); 
Governor.performDuties(); 

class Person {
    constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    }

    Hello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    
    introduce() {
        console.log(`I'm ${this.name}, ${this.age} years old, from ${this.location}`);
    }
    
    Birthday() {
        this.age++;
        console.log(`Happy birthday! Now I'm ${this.age} years old.`);
    }
    }
    



    

class PostalWorker extends Person {
    deliverMail() {
    console.log('Delivering mail');
    }

    sortMail() {
    console.log('Sorting mail');
    }
}

class Chef extends Person {
    prepareMeal() {
    console.log('Preparing meal');
    }

    cookDish() {
    console.log('Cooking dish');
    }
}

const postalWorker1 = new PostalWorker('John Doe', 30, 'New York');
costalWorker1.Hello(); 
postalWorker1.introduce();  
postalWorker1.deliverMail();
postalWorker1.sortMail(); 

const postalWorker2 = new PostalWorker('Jane Smith', 35, 'Los Angeles');
postalWorker2.Birthday(); 
postalWorker2.introduce();  

const chef1 = new Chef('Alice Johnson', 40, 'San Francisco');
chef1.Hello(); 
chef1.prepareMeal(); 
chef1.cookDish(); 

const chef2 = new Chef('Bob Wilson', 45, 'Chicago');
chef2.Birthday(); 
chef2.introduce(); 
