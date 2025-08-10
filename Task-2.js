const n1 = 6;

const result = checkEvenOdd(n1);

function checkEvenOdd(n1){
     if(n1 % 2 === 0){
        return n1/2;
     }else{
        return n1*2;
     }

}

console.log (result);