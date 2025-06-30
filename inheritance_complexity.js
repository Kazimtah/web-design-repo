function Employee(name){
    this.name = name;
    this.code = function(){
        console.log(`${this.name} writes code in Javascaripts`);
    }
}

function Programmer(name){
    Employee.call(this,name);
}
function Manager(name){
    Employee.call(this,name);
}
