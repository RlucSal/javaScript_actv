/*Write a function reverseString that takes a string as input and returns the reversed version of the string.*/


function reverseString (str){
 return str.split("").reverse().join("");

}

console.log (reverseString("hello"));
