console.log("Hello World");
name = "Sriyansu";
console.log(name);
age = 18;
console.log("My age is "+age);
x = null;
y = undefined;
console.log(x +" " + y);
price = 99.99;
console.log(price);
isBoolean = true;
console.log(isBoolean);
isBoolean2 = false;
console.log(isBoolean2);

let number = 12;
number = 344
console.log(number);
const neo = 23;
console.log(neo);

const student = {
    Fullname : "Sriyansu dash",
    age : 18,
    reg_no : 2241004190,
    cgpa : 7.2
};
console.log(student);
 console.log("Name = "+student.name);
 console.log("Age = "+student.age);
 console.log("Registration Number = "+ student.reg_no);
 console.log("CGPA = "+student.cgpa);

 student.age = student.age+1
 console.log(student.age+1);

 console.log("Print new function");
 const insta={
    name :" Sriyansu Dash",
    username :"@sriyansu_dash",
    followers : 143,
    followings : 134
 };
 console.log(insta);

 let string = "This is a string";
 var size =0;
 for(let i of string){
    console.log("i = ",i);
    size++;
 }
 console.log(size)


 const Smartphone ={
   Brand : "Google",
   model : "Pixel 8 pro",
   operatingSystsem : "Android"
 };
 console.log(`${Smartphone.Brand} is the Manufaturer of ${Smartphone.operatingSystem} , Its recently lunched a Smartphone is ${Smartphone.model}`,"{This line is wrriten by using templet literal}");
//  console.log(this.Brand ," is manufaturer of ", this.operatingSystem, "Its recently lunched a Smartphone is ",this.model, "{This line a string}");

const Student = {
   name : "sriyansu dash",
   reg_no : 2241004190,
   section : 2241030,
   seriel_no : 10 
}
console.log(`My name is ${Student.name} My registration number is ${Student.reg_no} and I am from section ${Student.section} And my seriel number is ${Student. seriel_no}`);

let a = 23223;
console.log(typeof a);