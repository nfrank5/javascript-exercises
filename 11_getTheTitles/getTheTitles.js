const getTheTitles = function(books) {
    const titles = books.map(element => {
        return element.title
    });
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
