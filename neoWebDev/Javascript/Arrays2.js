let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element ** 2);
}

console.log(newArray);
