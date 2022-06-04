const palindromes = function (str) {
    let onlyLetters = str.replaceAll(/[^\w]/g,"");
    let lowercaseStr = onlyLetters.toLowerCase();
    let reversedStr = onlyLetters.split("").reverse().join("").toLowerCase();
    return lowercaseStr===reversedStr?true:false
};

// Do not edit below this line
module.exports = palindromes;
