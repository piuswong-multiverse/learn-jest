const filterByTerm = (inputArr, searchTerm) => {
    if(searchTerm == null || searchTerm.length===0){
        throw "Cannot search for empty string.";      
    }


    const regex = new RegExp(searchTerm, "i") // i for insensitive to case
    return inputArr.filter( (elem) => {
        return elem.url.match(regex);
    });
};

module.exports = filterByTerm;