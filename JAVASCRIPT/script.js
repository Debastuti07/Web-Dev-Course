// words vs keywords 

//the words those can build something in js are the keywords


//var,let,const-line-by-line comparison

var userName="tuti";
a=12;
var a;//declaration 
var a=12;//declare and initialization
var a=13;
// var problems 
//var window mein add karta h
//var function scoped hota h 
//app firse declare kar sakte ho same name se and error nhi ayega 


// let b=12;
// let b=20;

// const a=12;


// let a=10;
//global scope 
//function scope
//block scope 

 // const a; //error 


 //Reassignment , redeclaration 

 var a=12;
 a=32;



 let b=12;
 b=32;
 
 
 // console.log(a);//error a is not initialized
 
//  let a=12;
 
 
 //temporal dead zone
 // utna area jitne mein js ko pata to hai ki variable exist karta hai par wo aapko value nhi de sakta 

 
 //Hoisting impact per type 
 
 //hoisting=> ek variable ko jab js mein banaate hai to wo variable do hisso mein toot jaata hai and uska declare art upar chala jata hai and uska initialization part neeche reh jata h
 
 
 // var-> hoist->undefined
 // let-> hoist-> X
 // const-> hoist-> X
 
 
 console.log(nm);//undefined 
 var nm="megha";
 
//  console.log(age);//error
//  let age=18; 



var x=1;
{
    var x=2;
}
console.log(x);//2


let y=1;
{
    let y=2;
}
console.log(y);//1
