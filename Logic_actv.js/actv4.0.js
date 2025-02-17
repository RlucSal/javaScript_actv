/*Create a function averageArray that calculates the average of numbers in an array */


function averageArray (array){
    let sum  =0;

    for (let i = 0; i<array.length; i++){
    sum += array[i];
}
    return sum /array.length; 
};

let  numbers =  [ 1,3,5,6,7,8,4,5,67,89,350,98];
console.log(averageArray(numbers));
