function mimin(target,...sources){
    Object.assign(target, ...sources);

}

const canEat = {
    eat: function (){
        this.hunger;
        console.log(`${this.name} is eating`);

    }
}
const canWalk ={
    walk: function(){
        console.log(`${this.name} is walking`);
    }
}

const canCode = {
    code: function(){
        console.log(`${this.name} is coding`)
    }
};


function Programmer(name){
    this.name = name;
    this.hunger = 10;    

}

// Object.assign(Programmer.prototype,canEat,canCode,canWalk);
const programmer = new Programmer('Steven');
mimin(programmer,canEat,canCode,canWalk);
console.log(programmer);
programmer.eat();
programmer.walk();
programmer.code();