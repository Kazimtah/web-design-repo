// javascript data type
//1. String
//2. Number
//3. Boolean-- true---false
//4. Bigint
//5. Undefined
//6. Null 
//7. Symbol
//8.Object
        //1.builtin Object
            // object
            // Arrays
            // dates
            // maps
            //set
            // intarray
            //floatarray
            //promises
        //2. Userdefined Object
// console.log('hello'*2);
// let mystr = true;
// let mydate = new Date("2025-06-30");
// console.log(typeof mystr);
// console.log(mydate);

let myVal = parseInt(document.getElementById('p1').innerHTML);
function action(act){
    if(act == '+'){
        myVal +=1;

    }else{
        myVal -=1;
    }
    document.getElementById('p1').innerHTML = myVal;
}













