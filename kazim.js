function Programmer(name, prefferedlanguage){
    this.name = name;
    this.prefferedlanguage = prefferedlanguage;
    this.writeCode = function(){
        console.log( `${this.name} write ${this.prefferedlanguage} code`);


    };
   this.drinkCoffee = function(){
    console.log(`${this.name} drink confee.`);
   
   };
};
function add(num1, nume2){
    return num1+nume2;

}
const n = add;
console.log(n(2,2));
console.log(add.length);

const Programmerfun = new Function('name', `
    this.name = name;
    this.writeCode = function(){
        console.log('Code in Javascript');
    
    }
`);
const prgrommer = new Programmerfun('Steven');
prgrommer.writeCode();


// Exercise

function calculateprice (groceryitem,price){
    return price* groceryitem;

}
const preformcalculation = calculateprice;
console.log(preformcalculation(4, 0.2));

//lesson 
let a = 10;
let b = 30;
a = 20;
console.log(a);
console.log(b);
console.log(a);
// Reference Type : passed by reference
a = {value: 20};
b =  a ;

a.value = 100;
console.log(a);
console.log(b);
//lesson
const person = {
    name: 'steven'
};

console.log(person);
person.favoriteFood = 'tacos';
console.log(person);

person['favoriteIceCream'] = 'Chocolate';
console.log(person);

delete person.favoriteIceCream;
console.log(person);

person.eat = function(){
    console.log(`${this.name} eats ${this.favoriteFood}`);
}
person.eat();

// Exercise
function GroceryItem (name,quantity){
    this.name = name;
    this.quantity = quantity;
    this.display = function (){
        console.log(`${this.quantity} x ${this.name}`);
    }


}
const newItem = GroceryItem('bananas', 5);
// newItem.newproduct = 'Produce';
console.log(newItem); 

//lessson 
 let number = [1,2,3,4,5,6];
 for (const element of number)
    console.log(element);

 const dog = {
    name: "max", age: 4, eyecolor: 'blue'
 }

 console.log('*****************');
 for (const key in dog)
    console.log(dog[key]);

const keys = Object.keys(dog);
for(const key of keys)
    console.log(key);
const values = Object.values(dog);
for(const value of values);
    console.log(values);
const entries = Object.entries(dog);
for(const entry of entries);
    console.log(`key: ${entry[0]} => Value: ${entry[1]}`);
//