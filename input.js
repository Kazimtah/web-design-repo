function checker(){
    let pwd1 = document.getElementById('pwd1');
    let pwd2 = document.getElementById('pwd2');
    if (pwd1==pwd2){
        document.getElementById('p1').innerHTML = "Match";
    }else{
        document.getElementById('p1').innerHTML = "Password does not match";
    }
}