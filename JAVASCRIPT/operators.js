// Arithmetic, comparison,logical, assignment, unary, tenary

// + - * / % ** arithmatic operators 
console.log(1+2);
console.log("debas"+"tuti");
console.log(2-1);
console.log(2/1);
console.log(2*1);
console.log(2%1);
console.log(2**3);

let a=12;//assignment operatior
console.log(a+=3);
console.log(a-=3);
console.log(a*=3);
console.log(a%=3);
console.log(a/=3);

// == === < > <= >= ! != !== comparison operators
console.log(2==1);
console.log(12=="12");//not strict
console.log(12==="12");//checks datatype
console.log(12!=14);
console.log(12!="12");//not strict
console.log(12!=="12");//strict
console.log(2<5);



// && || logical operator
// true && true= true
// true && false =false 
console.log(12>13 && 13>12);//and
console.log(12>13 || 13>12);//or

//unary operator
// + - ! ++ --
console.log(+"tuti");
console.log(+"10");//converts into number
console.log(!10);
console.log(typeof "tuti");

let p=12;
console.log(p++);
let q=12;
console.log(++q);


// ?: ternary operator
// condition?true:false;
12>13?console.log("true"):console.log("false");

//typeof vs instanceof
console.log(typeof null);
console.log(typeof []);

let arr=[];
console.log(arr instanceof Array);

//instanceOf only works for referance anf typeOf only works for premitive datatypes


//practice question
let x=10;
let y=20;
if(x>5 && y<25){
    console.log("A");
    
}
else{
    console.log("B");
    
}


let isAdmin=true;
let isLoggedIn=false;

if(isAdmin||isLoggedIn)
{
    console.log("Access granted");
    
}
else{
    console.log("access denied");
    
}


let b=3;
let c=b++;
console.log(b,c);


let m=10;
console.log(m--);
console.log(m);


let n=5;
let result=n++ + ++n;
console.log(result);
