const filterByTerm = (inputArr, searchTerm) => {
    return inputArr.filter( (elem) => {
        return elem.url.match(searchTerm);
    });
};

module.exports = filterByTerm;