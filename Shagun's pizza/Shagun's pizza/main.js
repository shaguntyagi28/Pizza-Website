const name = document.getElementById("name");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const top1 = document.getElementById("top1");
const top2 = document.getElementById("top2");
const top3 = document.getElementById("top3");
const top4 = document.getElementById("top4");
var top_cost = 0;

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
var size_cost = 350;

const number = document.getElementById("number");

const top_price = document.getElementById("top_price");
const size_price = document.getElementById("size_price");
const no = document.getElementById("no3");
const total = document.getElementById("total");
function validate(){
    if( name.value == "" ) {
        alert( "Please provide your name!" );
        name.focus() ;
        return false;
     }
   
     if( address.value == "" ) {
        alert( "Please provide your Address!" );
        address.focus() ;
        return false;
     }
     if( phone.value == "" ) {
        alert( "Please provide your Phone no!" );
        phone.focus() ;
        return false;
     }
     if( email.value == "" ) {
        alert( "Please provide your Email!" );
        email.focus() ;
        return false;
     }

     if(top1.checked==true){
         top_cost=top_cost+50;
     }
     if(top2.checked==true){
        top_cost=top_cost+50;
    }
    if(top2.checked==true){
        top_cost=top_cost+50;
    }
    if(top3.checked==true){
        top_cost=top_cost+50;
    }

    console.log(top_cost);
    top_price.innerHTML=top_cost;
    
    if(s1.checked==true){
        size_cost=100;
    }
    if(s2.checked==true){
        size_cost=250;
    }
    size_price.innerHTML=size_cost;

    console.log(size_cost)
    var no = number.options[number.selectedIndex].value;
    no3.innerHTML=no;
    total.innerHTML= "Rs"+no*(top_cost+size_cost);

}