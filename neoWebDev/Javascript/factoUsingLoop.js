// let value = prompt("Enter a positive integer: ");
let value = 4;
if (value !== null && value !== ""){
    value = parseInt(value);
    if (isNaN(value) || value <= 0){
        console.log("Please enter a valid input");
    }
    else{
        console.log("You entered: " + value);
        let result = 1;
        for (let i = 1; i <= value; i++) {
            result *= i;
        }
        console.log(`The factorial of ${value} is ${result}`);
    }
}