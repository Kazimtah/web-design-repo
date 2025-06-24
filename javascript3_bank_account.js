function band_Account_status(intialbalance){

    let intialbalance = intialbalance; //private variable to store balance
    
    // define private method to validate the amount
    const isValidAmount = function(amount){
        return typeof amount === 'number' && amount >0;
    
    }

    // public method to deposite money
    this.deposite = function(amount){
        if (isValidAmount(amount)){
            balance += amount;
            console.log(`Deposited: $${amount}`);

        }
        else {
            console.log('Invalid deposite');


        }

    }
    // public method to withdraw money
    this.withdraw = function(amount){
        if(isValidAmount(amount)){
            if(amount <= balance){
                balance -=amount;
                console.log(`withdrew: $${amount}`);
            }
            else {
                console.log('Insufficient funds')
            }
        
        
     } else {
        console.log("invalid withdraw amount")
     }
       
        
}
    // Public method to get the current balance
    this.getBalance = function(){
        return balance;

    }
}

const myaccount = new band_Account_status(100);
myaccount.deposite(50);
myaccount.withdraw(30);
console.log(myaccount.getBalance());

