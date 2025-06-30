function Programmer(name){
    this.name = name;

}
Programmer.prototype.code = function(){
    console.log(`${this.name} starts coding`);
}
function FrondEndProgrammer(name){
    Programmer.call(this, name);
}
function BackEndProgrammer(name){
    Programmer.call(this, name);
}

function extend(child, Parent){
    child.prototype = Object.create(Parent.prototype);
    child.prototype.constructor = child;

}
extend(FrondEndProgrammer, Programmer);

FrondEndProgrammer.prototype.code = function(){
    Programmer.prototype.code.call(this);
    console.log(`${this.name} is codeing in HTML/CSS/Javascripts`);
}
extend(BackEndProgrammer,Programmer);
const steven = new FrondEndProgrammer('Steven');
const alice = new BackEndProgrammer('Alice');

steven.code();
alice.code();
