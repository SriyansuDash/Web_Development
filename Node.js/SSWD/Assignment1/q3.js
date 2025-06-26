let a=1,b=-3,c=2;
function findRoots(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    const twoA = 2 * a;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / twoA;
        const root2 = (-b - Math.sqrt(discriminant)) / twoA;
        console.log(`Roots are real and distinct.`);
        console.log(`Root 1: ${root1}`);
        console.log(`Root 2: ${root2}`);
    } else if (discriminant === 0) {
        const root = -b / twoA;
        console.log(`Roots are real and equal.`);
        console.log(`Root: ${root}`);
    } else {
        console.log(`Roots are imaginary.`);
    }
}

findRoots(a,b,c)
