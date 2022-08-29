const filterByTerm = (inputArr, searchTerm) => {
    const regex = new RegExp(searchTerm, "i") // i for insensitive to case
    return inputArr.filter( (elem) => {
        return elem.url.match(regex);
    });
};

module.exports = filterByTerm;