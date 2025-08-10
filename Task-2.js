const n1 = 6;

const result = checkEvenOdd(n1);

function checkEvenOdd(n){
     if(n % 2 === 0){
        return n/2;
     }else{
        return n*2;
     }

}

console.log (result);