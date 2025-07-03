const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const array3 = new Array(10);
console.log(array);
console.log(array[2]);
array[2] = 20; 
console.log(array[2]);
console.log(`The length of the array is ${array.length}`);
console.log(`The array is ${array.join(" and ")}`);
console.log(`using pop element ${array.pop()}`);
console.log(`Using array push ${array.push(11)}`);
console.log(`The array shifted is ${array.shift()}`);
console.log(`The array after unshift is ${array.unshift(0)}`);
array.concat(array2,array3);
console.log(`The array after concat is ${array}`);


let a = [1, 2, 3, 4, 5];
a.forEach((value, index, a) =>{
    console.log(value, index, a);
    
})


//map func

let newArray = a.map(a=>{
    return a ** 2;
})
console.log(newArray);


//filter func
// const greaterThanTwo = a.filter(a => {
//     return a > 2;
// });

const greaterThanSeven = ( e=>{
    if(e > 7){
        return true;
    }
    else{
        return false;
    }
});
console.log(array.filter(greaterThanSeven));

