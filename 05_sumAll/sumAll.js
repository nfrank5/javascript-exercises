const sumAll = function(num1, num2){
    let sum = 0;
    if(num1<0||num2<0||typeof num1!="number"||typeof num2!="number"){
        return 'ERROR'
    }
    nums = Object.values(arguments).sort();
    for(let i=nums[0];i<=nums[1];i++){
        sum+=i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
