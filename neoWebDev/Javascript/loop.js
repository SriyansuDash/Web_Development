// for loops
for(let count = 1; count <=10 ; count++){
    console.log("Loop is printed")
}
// for loop for sum n numbers
let sum = 0;
for(let index = 1;index<=10;index++){
    sum +=index
}
console.log("Sum is ",sum)
// for loop for global variable var
for(var i=0;i<=5;i++){
    console.log("i = " ,i);
}
console.log(i)
// while loops.......
var num = 10
let j 
while (j<=num){
    console.log("Value of j is ",j);
    j++
}
// do-while loops....
let n = 10;
var mul ;
let k =1;
do{
    mul *= n;
}while(k<=num);
console.log(mul);

// for_of_loop.......

let string = "This is a string"
for(let i of string){
    console.log(i)
}