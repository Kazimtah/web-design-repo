function func1(x){
    document.getElementById(x).style.display = 'none';
}

function reset(){
    document.getElementById('a1').style.display = 'inline';
    document.getElementById('a2').style.display = 'inline';
    document.getElementById('a3').style.dispaly = "inline";

    document.getElementById('a4').style.display = 'block';
    document.getElementById('a5').style.display = 'block';
    document.getElementById('a6').style.dispaly = "block";

    document.getElementById('a7').style.display = 'inline-block';
    document.getElementById('a8').style.display = 'inline-block';
    document.getElementById('a9').style.dispaly = "inline-block";
} 

function func2(x){
    document.getElementById(x).style.visibility= 'hidden';
}