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

function FrontEndProgrammer (name){
    Programmer.call(this, name);

}
function BackEndProgrammer(name){
    Programmer.call(this, name);

}

FrontEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype = Object.create(Programmer.prototype);

FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;
BackEndProgrammer.prototype.constructor = BackEndProgrammer;


const joe = new FrontEndProgrammer('Joe');
joe.code();
joe.debug();
joe.meeting();