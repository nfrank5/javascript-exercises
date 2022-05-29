const repeatString = function(str, num) {
    let repeatedStr = "";
    for(let i=0;i<num;i++){
        repeatedStr+=str;
    }
    return num<0?"ERROR":repeatedStr
};

// Do not edit below this line
module.exports = repeatString;
