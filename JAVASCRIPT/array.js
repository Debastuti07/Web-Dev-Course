let arr=[1,2,3,4,5];
console.log(arr[0]);

arr.push(70);
console.log(arr);


arr.pop();
console.log(arr);//remove value from last

arr.shift();
console.log(arr);//remove from first 


arr.unshift(0)//add val in beginning 
console.log(arr);

arr.splice(2,1)//konsa inx se hatana h ,kitna hatana h 
console.log(arr);

let newarr=arr.slice(0,2)
console.log(newarr);


arr.reverse(arr)
console.log(arr);


let newArr=arr.sort(function(a,b){
    return a-b;//ascending
})

console.log(newArr);


arr.forEach(function(val){
    console.log(val+5);
    
})

//map sirf tab use karna h jab aapko ek naya array banana hai pichle array  ke data ke basis par 

//map dikhte hi saath man mein ek blank array bana liya karo 

let newmap=arr.map(function(val){
    return 12
})
console.log(newmap);


let arrfill=arr.filter(function(val){
    if(val>2) return true;
})

console.log(arrfill);



let arrReduce=arr.reduce(function(accumulator,val){
    return accumulator+val;
},0);
console.log(arrReduce);



let arrfind=arr.find(function(val){
   return val===2; 
})

console.log(arrfind);



let arrsome=arr.some(function(val){
    return val>3;
})
console.log(arrsome);



let arrevery=arr.every(function(val){
    return val>3;
})
console.log(arrevery);


let myarr=[1,2,3,4,5,6,7];
let[a,b, ,c]=arr;   //destructing 


let myarrtwo=[1,2,3,4,5,6,7];
let myarrcopy=[...myarrtwo];  //spread operator 



//create an array with 3 fruit and print the second fruit 
let fruit=["apple","banana","berry"];
console.log(fruit[1]);


//add mango at the end and pineapple at the beginning of this array 

fruit.push("mango");
fruit.unshift("pineapple");
console.log(fruit);


//replace "banana" with "kiwi" in array section 
fruit[2]="kiwi";
console.log(fruit);


//insert "red" and "blue" at index 1 in this array 
let colors=["green","yellow"];
colors.splice(1,0,"red","blue");
console.log(colors);


//extract only the middle 3 elements from this array 
let items=[1,2,3,4,5,6]
let newitems=items.slice(1,4);
console.log(newitems);

//sort this array alphabetically and then rivese it 

let names=["zara","arjun","mira","bhavya"];
names.sort().reverse();
console.log(names);


//use .map() to square each number:
[1,2,3,4]

let num=[1,2,3,4]
let squarenum=num.map(function(val){
   return val**2;
})
console.log(squarenum);



//use .filter() to keep numbers greater than 10
let nums=[5,12,8,20,3];
let numfilter=nums.filter(function(val){
    if(val>10) return val;
})

console.log(numfilter);


//use .reduce() to find the sum of this array 
let newArray=[10,20,30];
let newArrayReduce=newArray.reduce(function(acc,val){
    return acc+val;
},0);
console.log(newArrayReduce);


//use .find() to get the first number less than 10
let findArr=[12,15,3,8,20];
let newfindArr=findArr.find(function(val){
    return val<10;
})
console.log(newfindArr);


//use .some() to check if any student has scored below 35 
let myscore=[45,60,28,90];
let mynewScore=myscore.some(function(val){
    return val<35;
})
console.log(mynewScore);


//use .every() to check if all numbers are even 
let arreve=[2,4,6,8,10]
let eveans=arreve.every(function(val){
    return val%2==0;
})
console.log(eveans);


//destructure this array to get firstname and lastname 
let fullname=["tuti","de"];
let [firstname,lastname]=fullname;
console.log(firstname);
console.log(lastname);


//merge two array using spread operator
let arr1=[1,2];
let arr2=[3,4];
let finalarr=[...arr1,...arr2];
console.log(finalarr);

//add "india" to the start of this array using spread

let countries=['USA','UK'];

countries=["india",...countries];
console.log(countries);


let arr3=[1,2,3]
let arr4=[...arr3];
console.log(arr4);
