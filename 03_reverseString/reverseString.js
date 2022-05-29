const reverseString = function(str) {
    const splitStr = str.split("");
    const reversed = [];
    for(const i of splitStr) {
        reversed.unshift(i);
    }
    return reversed.join("")
};

// Do not edit below this line
module.exports = reverseString;
