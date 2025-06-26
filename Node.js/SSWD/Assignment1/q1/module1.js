function concatenate(fs,mn,ln){
    console.log(fs+" "+mn+" "+ln);
    
}
 function age(date,month,year){
    let d=new Date();
    let y=d.getFullYear()-year;
    let m=Math.abs(d.getMonth()-month);
    let da=d.getDate()-date;
    return `Age is ${y} year ${m} month and ${da} day`;
}
 function age2(age){
 return age+24;
}
module.exports={concatenate,age,age2};