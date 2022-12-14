// Define tests before starting dev, really; according to specs.  
// Filename here is a convention from Ruby.
// Define inputs and outputs; define test using 'expect' and a Jest matcher

const filterByTerm = require('../src/index');

// contains one ore more related tests
describe("Filter function", () => {

    const input = [
        {id: 1, url: "https://www.google.com"},
        {id: 2, url: "https://www.yahoo.com"},
        {id: 3, url: "https://www.bing.com"},
        {id: 4, url: "https://www.project.dev"}
    ];

    // here's one test
    test("Filter by a search term: 'dev'", () => {
        // define inputs

        // define expected results of test
        const output = [
            {id: 4, url: "https://www.project.dev"}
        ];
        // define the test
        expect(filterByTerm(input, 'dev')).toEqual(output);
        expect(filterByTerm(input, "DEV")).toEqual(output);
        //note: toEqual is good for primitives, but not good for objects w/ diff instances
    });

    // related test
    test("Filter by search term: '.com'", () => {
        const output = [
            {id: 1, url: "https://www.google.com"},
            {id: 2, url: "https://www.yahoo.com"},
            {id: 3, url: "https://www.bing.com"},
        ];
        expect(filterByTerm(input,'.com')).toEqual(output);
        expect(filterByTerm(input,'.COM')).toEqual(output);
    });

    // Negative test (expected to throw error)
    // When expecting a thrown error, must wrap input in function so the error is collected
    // https://jestjs.io/docs/expect#tothrowerror
    test("Give error when filtering by empty search term", () => {
        let message = "Cannot search for empty string.";
        expect( () => {
            filterByTerm(input,null);
        }).toThrow(message);
        expect( () => {
            filterByTerm(input,"");
        }).toThrow(message);
        expect( () => {
            filterByTerm(input,undefined);
        }).toThrow(message);
    });
});