// if else else if 
// switch case 
switch(5){
    case 1:
        console.log("case 1");
        break;
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        break;
    default:
        console.log("hello");
    

}
//early return pattern

function getGrade(score){
    if(score>=90 && score<=100) return 'A';
    if(score>=80 && score<=89) return 'B';
    if(score>=70 && score<=79) return 'C';
    if(score>=60 && score<=69) return 'D';
    if(score>=33 && score<=59) return 'E';
    if(score>=0 && score<=32) return 'F';
    return 'Invalid marks';
    
}
console.log(getGrade(78));



//rock paper scissors logic
function rps(user,computer){
  if(user===computer) return "draw";
  if(user==="rock" && computer==="scissor") return "user";
  if(user==="scissor" && computer==="paper") return "user";
  if(user==="paper" && computer==="rock") return "user";

  return "computer";
} 

console.log(rps("rock","rock"));