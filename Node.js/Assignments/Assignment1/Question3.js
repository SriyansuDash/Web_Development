let a = 33; b = 44 , c = 66;
function findroots(a , b ,c ){
    let d = b*b - 4*a*c;
    if(d > 0){
        let root1 = (-b + Math.sqrt(d))/(2*a);
        let root2 = (-b - Math.sqrt(d))/(2*a);
        console.log(`Roots are real and different: ${root1} , ${root2}`);
        
        console.log(root1 , root2);
    }
    else if(d === 0){
        let root = -b/(2*a);
        console.log(`Roots are real and same: ${root}`);
    }
    else{
        console.log("Roots are imaginary");
        
    }
}
findroots(a , b , c);
