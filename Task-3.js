function make_avg(arry){
const leng = arry.length;
let sum = 0;
for(let i of arry){
     sum += i;
}
const avgValue = sum / leng;
return avgValue;
}

const arr = [2,1,33,34,22];
const res = make_avg(arr);
console.log(res.toFixed(2));