// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
let str=prompt("enter the string");
function vowels(str){
    const vowel=/[aeiou]/gi;
    const matches=str.match(vowel);
    return matches?matches.length:0;
}
console.log(vowels(str));
