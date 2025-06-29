function Programmer(name, specilization){
    this.name = name;
    this.specilization = specilization;
    
}

function FrondEndPogramemr(name, specilization, preferedLanguage){
    Programmer.call(this, name, specilization);
    this.preferedLanguage = preferedLanguage;
}

const steven = new FrondEndPogramemr('Steven', 'Application Development', 'React');

console.log(steven.preferedLanguage);
console.log(steven.name);
console.log(steven.specilization);