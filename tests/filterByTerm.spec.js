// Define tests before starting dev, really; according to specs.  
// Filename here is a convention from Ruby.
// Define inputs and outputs; define test using 'expect' and a Jest matcher

const filterByTerm = require('../index');

// contains one ore more related tests
describe("Filter function", () => {

    // here's one test
    test("Filter by a search term: 'dev'", () => {
        // define inputs
        const input = [
            {id: 1, url: "https://www.google.com"},
            {id: 2, url: "https://www.yahoo.com"},
            {id: 3, url: "https://www.bing.com"},
            {id: 4, url: "https://www.project.dev"}
        ];
        // define expected results of test
        const output = [
            {id: 4, url: "https://www.project.dev"}
        ];
        // define the test
        expect(filterByTerm(input, 'dev')).toEqual(output);
        expect(filterByTerm(input, "DEV")).toEqual(output);
    });


});