/* Write a function toTitleCase that converts a given string to title case (first letter of each word capitalised). letter of each word capitalized).*/


function toTitleCase(str){


return str.toLowerCase().split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};


console.log(toTitleCase("hola que tal como te va")); 

