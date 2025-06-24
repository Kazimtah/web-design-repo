let user = {
    name: "Steven",
    surname: "Garcia",
    email: "steven@stevencode.com",
    isActive: true,

    set fullName(value){
        [this.name, this.surname] = value.split('');

    },
    get fullName(){
        return `${this.surname} ${this.surname}`;


    },
    login(){
        console.log(`${this.fullName} logged in `);
    },
    logout(){
        console.log(`${this.fullName} logged out`);
    }

}
let admin = {
    __proto__: user,
    isAdmin: true,
    managedUser(){
        console.log(`${this.fullName} is managing user`);

    }


}
let guest = {
    __proto__: user,
    isGuest: true,
    browseContent(){
        console.log(`${this.fullName} is the user who browse the content`);
    }

}

let superAdmin = {
    __proto__: admin,
    isSuperAdmin: true,
    manageAdmin (){
        console.log(`${this.fullName} is managing admin`);
    }
}
//admin.fullName = "Bruce Wayne";
//console.log(admin.fullName);
// console.log(user.fullName);
for( let key in admin)
    console.log(key)

console.log(Object.keys(admin));
const programmerPrototype = {
    writeCode(){
        console.log(`Writing code in ${this.preferedLanguage}`);
    },
    drinkCoffe: function(){
        console.log('Drinking Confee');
    }
}

function Programmer( name, preferedLanguage){
    let privateName = name;

    this.preferedLanguage = preferedLanguage;

    Object.defineProperties(this,{
        'name': {
            get: function(){
                return privateName;
            },
            set: function(newName){
                privateName = newName;
            }
        }
    })
    // inherite common behavior
    Object.setPrototypeOf(this, programmerPrototype);
}

const jsprogrammer = new Programmer('Alice', 'Javascript');
jsprogrammer.writeCode();
jsprogrammer.drinkCoffe();
console.log(jsprogrammer.name);
jsprogrammer.name = 'Steven';
console.log(jsprogrammer.name);