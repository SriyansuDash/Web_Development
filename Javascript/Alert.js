alert("Hello.....")
let number = prompt("Enter a number ")
if(number%5 === 0){
    console.log("This number is divisible by 5")
}
else{
    console.log("This number is not divisible by 5");
}
alert("Check your answer in the console")

let num = prompt("Enter a number ");
if (isNaN(num)) {
    alert('Please enter a valid number');
}else{
    for(let i=1;i<=num;i++){
        let name = prompt("Enter name",i);
       document.write ("Names are ",name,"<br>");  
    }
}