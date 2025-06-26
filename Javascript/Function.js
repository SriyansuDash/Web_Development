// let x = myFunction(4,3);
// function myFunction(a,b){
//     return a*b;
// }
// console.log("The result of the multiplication is: " +x);

// function toCelcious(f){
//     return (5/9) *(f-32)
// }
// let value = toCelcious(55)
// console.log(`${value} Celsius`) 

function greet (name){
    console.log(`Hello ${name} , Good Morning`);
    console.log(`Hello ${name} , Good Afternoon`);
}
greet("Sriyansu");
greet("Satyajit");


function addition(a , b){
    console.log(a+b);
}
addition(3,5);
var addition1 = addition(2,4);
console.log("Sum of two numbers : ",addition1); // This will log undefined because the function does not return a value

function multiplication(a,b){
    return a * b; 
}
var result = multiplication(3,5);
console.log("Multiplication of two numbers : ",result); // This will log the result of