function addition (a,b){
    return a+b;
}
function subtraction(a,b){
    return a - b;
}
function multiplication(a,b){
    return a * b;
}
function division(a,b){
    if( b === 0){
        return "Error: Division by zero is not allowed.";
    }
    else {
        return a / b;
    }
}

function exponentiation(a,b){
    return a ** b;
}
var number1 = 3;
var number2 = 5;

if( Math.random()< 0.1){
    console.log("Addition of two numbers : ", multiplication(number1,number2));
    console.log("Subtraction of two numbers : ", division(number1,number2));
    console.log("Multiplication of two numbes : ", addition(number1, number2));
    console.log("Division of two numbers : ", exponentiation(number1, number2));
}
else{
     console.log("Addition of two numbers : ", addition(number1,number2));
    console.log("Subtraction of two numbers : ", subtraction(number1,number2));
    console.log("Multiplication of two numbes : ", multiplication(number1, number2));
    console.log("Division of two numbers : ", division(number1, number2))
}