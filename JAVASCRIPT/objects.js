let bloodgrp="Blood group "
let obj={
    name:"tuti",
    age:21,
    address:{
        city:"cob",
        pin:736101, 
        location:{
            lat:23.2,
            lang:77.4
        }
    },
    [bloodgrp]:"B+"
}
console.log(obj.name);


obj['age']=22;
console.log(obj);


let{lat,lang}=obj.address.location;


for(let key in obj){
    console.log(key,obj[key]);
    
}

let obj2=Object.assign({"price":"infinity"},obj)
console.log(obj2);


let newobj={...obj};
console.log(newobj);


//access the first name from the object 
const user={
    "first-name":"tuti"
}

console.log(user["first-name"]);




const cloneobj={
    info:{
        score:80
    }
}

let newcloneobj=JSON.parse(JSON.stringify(cloneobj))
newcloneobj.info.score=100
console.log(cloneobj.info.score);
