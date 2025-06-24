function Programmer(name, preferedlanguage){


    this.name = name;
    this.preferedlanguage = preferedlanguage;
    // public method
    this.writeCode = function(){
        console.log(`${this.name} writes ${this.preferedlanguage}`);



    }
    // private method
    const drinkCoffee = function(){
        console.log(`${this.name} drinks Coffee.`);

    }
    // public method
    this.StartDay = function(){
        drinkCoffee();
    }
}
const programmer = new Programmer("Steven","Javascript");
programmer.writeCode();
programmer.drinkCoffee();
programmer.StartDay();