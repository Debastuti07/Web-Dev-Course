//data types
//premitives-> aisi saari values jinko copy karne par tumhe real copy mil jaye 
//string ,number,boolean,null,undefined ,symbol,bigInt

//references->inko copy karne par real copy nhi milegi but aapko reference milega parent ka
//arrays,objects,functions
//[] {} ()

//'' single quotes
// "" double quotes
// `` backticks

// 12- integer 
// 12.3- float 

// boolean true and false 


// null ka matlab h aapne jaan boojh kar koi value nhi di 


let selectedStudents=null;


//undefined ka matlab ki aapne ek variable banaya aur usey value nhi di to jo value by default mili wo hai undefined 


//symbol->unique immutable value 
let u1=Symbol ("uid");


// bigInt
let a=9007199254740991n;

//dynamic typing -> js mein static typing nahi hai 


//typeof quirks
//truthy vs false 
//0 false "" null undefined NaN document.all


//type coercion -> concept jis mein aapka ek type automatically conver hojaayega
console.log("5"+1);
console.log("5"-1);


//predict the result: true+false,null+1, 5+"5",!!undefined
console.log(true+false);
console.log(null+1);
console.log(5+"5");
console.log(!!undefined);
console.log(typeof NaN);

//NaN ka type number h cz js usko as a failed number ki tarah trt karte h 
