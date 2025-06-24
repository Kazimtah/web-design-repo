// Exercise
function GroceryItem(name, quantity){
    this.name = name;
    this.quantity = quantity;
    this.display = function(){
        console.log(`${this.quantity} x ${this.name}`);
        
    }
}