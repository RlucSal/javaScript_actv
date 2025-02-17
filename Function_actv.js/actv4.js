/* A callback function is just a function passed as an argument to another function. Can be in another place, you can just import the function */

/* 4.1	Write a function that accepts a callback and calls it with a message.

function sendMessage(callback){
    const message = "hey this is a callback function";

callback (message) ;
};

const displayMessage = function (msg){
    console.log (msg);
};

sendMessage(displayMessage);
*/


/* 4.2 Create a function called customFilter that takes an array of numbers and a callback function.
The callback function should decide whether each number should be included in the final array.

Steps to follow:
Implement customFilter that iterates over an array and applies the callback function.
Use customFilter to filter out even numbers.
Use customFilter to filter out numbers greater than 10. */


function customFilter(array, callback){

let result = [];

for (let i= 0; i< array.length; i++){

    if (callback (array[i])){
        result.push (array[i]);

    }
}
return result; 

}

const numbers = [ 3,6,7,10,32,45,58,75,97,127,254];

const evenNumbers= customFilter(numbers, function (num){

    return num % 2 === 0;

});

console.log(evenNumbers);

const greaterThanTen = customFilter (numbers, function (num){
    return num >10;
});

console.log(greaterThanTen);

