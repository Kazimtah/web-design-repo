function Programmar(name, preferedPrgromming){
    let privateName = name;
    Object.defineProperties(this, { 
        'name': {
            get: function(){
                return privateName;

            },
            set: function(newName){
                if(!newName){
                    console.log("Name can not be empty");
                    return;

                }
                privateName = newName;

            }

        }
        

    });
    // prublic property
    this.preferedPrgromming = preferedPrgromming;

    // public method
    this.writeCode = function(){
        console.log(`${privateName} codes in ${this.preferedPrgromming}`);
    }
    let drinkConffee = function(){
        console.log('Gulp...');
    }
    // public method that use closure 
    this.startDay = function(){
        drinkConffee();
    }
}
const programmer = new Programmar('Alice', 'Javascript');
console.log(programmer.name);
programmer.name = '';
console.log(programmer.name);