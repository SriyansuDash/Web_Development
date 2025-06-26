const student={
    Name : 'Sriyansu Dash',
    reg_no : '2241004190' ,
    Age : '18',
    Section : 30
};
console.log(student );

const cars = {
    BMW : "M5 CS",
    AUDI: "A6 Allroad Quattro" ,
    Mercedes : "E Class Cabriolet",
    Lambo : "URUS",
    Land_rover : 'Velar'
};
for (let key in cars) {
    console.log(`${key} : ${cars[key]}`);
}

const Person ={
    firstName : "Sriyansu",
    lastName : 'Dash',
    Age : 18,
    address : {
        street : "Kolkata",
        city : "Howrah",
        state : "West Bengal",
        country : "India"
    },
    hobbies : ["Reading","Writing","Coding"],
    showInfo : function(){
        console.log("First name : ",Person.firstName );
        console.log("Last name : "   + this.lastName);
        console.log("Age : "+ this.Age);
        console.log("Address : ");
        console.log("\tStreet : "+ this.address.street);
        console.log("\tCity : "+ this.address.city);
        console.log("\tState : "+ this.address.state);
        console.log("\nHobbies are :");
        for(let i=0;i<this.hobbies.length;i++){
            console.log('\t'+ this.hobbies[i]);
        }
    }
};
Person.showInfo();  



// const Person ={
//     firstName : "Sriyansu",
//     lastName : 'Dash',
//     Age : 18,
//     Designation : 'Student',
//     Address: {
//         city : "khallikkot",
//         District : 'Ganjam',
//         State : "Odisha",
//     },
//     coding : function(){
//         return "Java","javaScript","HTML","PHP";
//     },
//     skills : ["Coding","Gaming","photography"],
// }
// console.log(Person);
//     // Hobbies : function (){
//     //     let str ="Person's Hobbies are : ";
//     //     for(let i in this.skills)
//     //         str += this.skills[i] + ', ';
//     //     return str.slice(0,-2);
//     // }