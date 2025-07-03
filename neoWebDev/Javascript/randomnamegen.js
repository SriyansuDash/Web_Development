let random = Math.random() * (4 - 1) + 1;

let obj1 = {
    1: 'Crazy',
    2: 'Amezing',
    3: 'Fire'
}
let obj2 = {
    1: 'Engine',
    2: 'Food',
    3: 'Garments'
}
let obj3 = {
    1: 'Bros',
    2: 'Limited',
    3: 'Hub'
}

console.log(`${obj1[Math.floor(random)]} ${obj2[Math.floor(random)]} ${obj3[Math.floor(random)]}`);

