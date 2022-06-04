const fibonacci = function(n) {
    if(n<=0){ return "OOPS" }
    let f = 1;
    let previous = 1;
    let buffer = null;
    for(let i=2;i<n;i++){
        buffer = f;
        f = f+previous;
        previous = buffer;
    }
    return f
};

// Do not edit below this line
module.exports = fibonacci;
