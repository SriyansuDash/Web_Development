// let mark = prompt("Enter your mark ")
// alert("Check your grade in Console")
// if (mark  >= 80) {
//     console.log("Your grade is A");
// } 
// else if(mark >=70 && mark <80){
// console.log("Your grade is B")
// }
// else if(mark <70 && mark >=60){
//     console.log("Your grade is C")
// }
// else if(mark >50 && mark <=60){
//     console.log("Your grade is D")
// }
// else if(mark <=50 && mark>40){
//     console.log("Your grade is E")
// }
// else{
//     console.log("Your grade is F");
// }



let mark = prompt("Enter your number : ")
let grade ;
switch (true) {
    case mark>80:
        grade = "A";
        break;
    case mark>=70 && mark<80:
        grade = "B";
        break;
    case mark >=60 && mark <70:
        grade = "C";
        break;
    case mark >=50 && mark<60:
        grade = "D";
        break;
        case mark >=40 && mark <50:
        grade = "E";
        break ;
    default:
        grade="F"
        break;
}
console.log("Your grade is ", grade);
alert  ("Your grade is "+grade);
alert ("Check your result in console");