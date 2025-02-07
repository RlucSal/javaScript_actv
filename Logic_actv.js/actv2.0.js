/*Create a function isPalindrome that checks if a given string is a palindrome (reads the same backward as forward).*/

function isPalindrome (str){

   const cleanedStr =  str.toLowerCase();
   const reversedStr = cleanedStr.split("").reverse().join("");
   return cleanedStr === reversedStr;

}


console.log(isPalindrome("hola"));
