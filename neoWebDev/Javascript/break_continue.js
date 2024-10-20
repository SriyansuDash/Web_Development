car = new Array()
car[1] = "BMW";
car[2] = "Audi";
car[3] = "Mercedese";
car[4] = "Maruti Suzuki";
car[5] = "Honda";
car[6] = "Toyota";
// for(let i = 1;i< car.length;i++){
//     if(i === 4){
//         continue;
//     }
//     else{
//         console.log(i," = ",car[i]);
//     }
// }
for(let j = 1;j<car.length;j++){
    if(j === 4){
        console.log(j," = ",car[j]);
        break;
    }
}