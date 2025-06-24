// lesson  
function programmming(name, preferedlanguage){
// private property
let privatname = name;
// public property
this.preferedlanguage = preferedlanguage;

// public method
this.writeCode = function(){
    console.log(`Cod in ${this.preferedlanguage}`);
}
// private method
let drinkConffee = function(){
    console.log('Gulp...');
}
// Public method that uses a closure
this.startDay = function(){
    drinkConffee();
}


}

const programmer = new programmming('Alice', 'Javascript');
programmer.writeCode();
programmer.startDay();
