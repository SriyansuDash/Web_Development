function isPrime(num){
    if(num <= 1 ){ return false;}
    else{
        for(let i = 2; i< Math.sqrt(num) + 1; i++){
            if(num % i === 0){
                return false;
            }
            else{
                return true;
            }
        }
    }
}
let num = 7;
console.log(isPrime(num));
