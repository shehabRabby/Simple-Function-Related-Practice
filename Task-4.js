function count_Zer0(str){
    let count = 0;
    for(let i of str){
        if(i === '0')
            count++;
    }
    return count;
}

const binaryNumber = '1000111000100010001';
const result = count_Zer0(binaryNumber);
console.log(result);