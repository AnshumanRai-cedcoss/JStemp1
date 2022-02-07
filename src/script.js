var out = "";
function submitForm(){
    var nm = document.getElementById('name').value ;
    var a1 =document.getElementById('age').value ;
    var w1 =document.getElementById('wt').value ;
    out = bmiMessage(a1 , w1);
     display(out ,nm ,a1 );
}
  
 function bmiMessage(a , w) {
     event.preventDefault();
    if(a >= 5 && a <= 7 ){
        if(w < 15 )
        out = "less than recommended value of 15 ";
        else if(w > 20)
        out = "greater than recommended value of 20 ";
        else
        out = "perfect"; 
    }
    else if (a >= 8 && a <= 10)
    {
        if(w < 21 )
        out = "less than recommended value of 21";
        else if(w > 25)
        out = "greater than recommended value of";
        else
        out = "perfect";
    }
    else if (a >= 11 && a <= 15)
    {
        if(w < 26 )
        out = "less than recommended value of 26";
        else if(w > 30)
        out = "greater than recommended value of 30";
        else
        out = "perfect";
    }
    else if (a >= 16 && a <= 20)
    {
        if(w < 31 )
        out = "less than recommended value of 31";
        else if(w > 40)
        out = "greater than recommended value of 40";
        else
        out = "perfect";
    }
    return out ;
 }
 function display (out , nm2, a2){
   document.getElementById('ans').innerHTML ="Hello "+nm2+" !! Your weight is "+out+" at an age of "+a2+"." ;
 }