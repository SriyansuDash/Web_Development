let mode = "Dark";
let color;
if(mode === "Dark"){
    color = "dark;"
}
if(mode === "White"){
    color = "White"
}
console.log(`The background color of the page is ${color}`);

let num = 33;
if(num%2 === 0){
    console.log(num,"This is a even number ");
}
else{
    console.log(num,"This is an odd number");
}

let age = 34;
if(age === 18){
    console.log("You are just in adult");
}
else if (age > 18 ){
    console.log("You are adult");
}
else if(age< 18){
    console.log("You are child");
}
else{
    console.log("You are alien");
}

let int = 33;
let result = (int === 33 ? "yes":"no");
console.log(result);

let string = "neofile";
let name = "neofile";
let check = string === name ? "Both are same" : "Both are different";
console.log(check);