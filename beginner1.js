function Programmer (name){
    this.name = name;
}
Programmer.prototype.code = function (){
    console.log(`${this.name} starts coding`);
}
function FrondEndProgrammer(name){
    Programmer.call(this, name); // Inherits properties from Programmer

}
// Setting up inheritance so we inherit methods
FrondEndProgrammer.prototype = Object.create(Programmer.prototype);
const steven = new FrondEndProgrammer("Steven");
console.log(FrondEndProgrammer.prototype.constructor === Programmer);
steven.code();
FrondEndProgrammer.prototype.constructor === FrondEndProgrammer;