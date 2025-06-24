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
admin.fullName = "Bruce Wayne";
console.log(admin.fullName);
console.log(user.fullName);