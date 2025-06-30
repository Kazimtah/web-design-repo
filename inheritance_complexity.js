function Employee(name){
    this.name = name;
    this.code = function(){
        console.log(`${this.name} writes code in Javascaripts`);
    }
}

function Programmer(name){
    Employee.call(this,name);
    Object.assign(this, canCode, canReview);
}
function Manager(name){
    Employee.call(this,name);
}

const canCode= {
    code(){
        console.log(`${this.name} is coding`);
    }
}
const canReview = {
    review(){
        console.log(`${this.name} is reviewing codes`);
    }
}

const steven = new Programmer('steven');
steven.code();
steven.review();