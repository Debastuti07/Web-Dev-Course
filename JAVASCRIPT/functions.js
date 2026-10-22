// what why how 
//what function 
//agar code likh diya to wo turant chal jata h 

function dance(){
    console.log("hey");

} 

dance();

let func=function(animal){
    console.log(`${animal} is dancing`);
    
}

func("horse");




function add(v1=0,v2){
   console.log(v1+v2);
   
}

add(1);


function hello (a,b,c,...val){//... rest operator
    console.log(val);
    
}
hello(1,2,4,5,6,9,3);


function abcd(){
    return 12;
}

let val=abcd();
console.log(val);


//first class function=> functions ko values ki tarah trt kar sakte hai 

//high order function +> wo function hota h jo ki return kare function ya fir accept kare ek function apne parameter mein 

function abcd(val){
// this is high order function 
}
function hlw(){
    return function(){
        //high order function 
    }
}
abcd (function(){

})




//pure vs impure function 

//aisa function jo ki bahar ki value ko naa badle wo h pure function 
function pure(){
    console.log("pure");
    
}
pure();
//aisa function jo bahar ki value ko badal de wo haa impure function 
let a=12;
function impure(){
    a++;
}
console.log(a);




//closures=>ek function jo return kare ek aur function aur reruen wala function hamesha use karega parent function ka koi variable 

function closure(){
    let a=12;
    return function(){
        console.log(a);
        
    }
}

//IIFE
(function (){

})
();

//hoisting 
let hoisting=function hoisting(){
    console.log("hello");
    
}
hoisting();




//BMI Calculator 

function bmi(weight,height){
    return weight/(height*weight);
}

console.log(bmi(63,1.63).toFixed(2));



//discount calculator 
function discountCal(discount){
    return function(price){
        return price-(price *(discount/100)); 
    }
}

let discounter=discountCal(10);
console.log(discounter(200));
