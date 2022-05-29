const removeFromArray = function(arr, ...args) {
    const removed = arr.reduce(function(acum,i){
        if(!args.includes(i)){
            acum.push(i);
        }
        return acum
    },[])
    return removed
};

// Do not edit below this line
module.exports = removeFromArray;
