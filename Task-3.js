function make_avg(arr){
const leng = arr.length;
let sum = 0;
for(let i of arr){
     sum += i;
}
const avgValue = sum / leng;
return avgValue;
}

const arr = [2,1,33,34,22];
const res = make_avg(arr);
console.log(res.toFixed(2));