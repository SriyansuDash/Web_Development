// function calculateCubeVolume(sidelength){
//     if(sidelength <= 0){
//         throw new Error("Sidelength must be a positive number.");
//     }
//     return Math.pow(sidelength, 3);
// }
// function main(){
//     try{
//         const sidelength = 3;
//         const volume = calculateCubeVolume(3);
//         console.log(`The volume of the cube is: ${volume}`);
//     }catch(error){
//         console.error(`Error: ${error.message}`);
//     }
// }
// main()


function calculateCubeVolume(sideLength){
    if(sideLength <=0){
        throw new Error("Sidelength must be a positive number.");
    }
    else{
        return Math.pow(sideLength , 3);
    }
}
function main(){
    try{
        let sideLength = 3;
        const volume = calculateCubeVolume(sideLength);
        console.log(`The volume of the cube is: ${volume}`);
    }catch(error){
        console.log(`Error : ${error.message}`);
        
    }
}
main();