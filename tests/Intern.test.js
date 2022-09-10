const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("getName method", () => {
        it("returns Intern name", () => {
            const testIntern = new Intern('Stephanos', 1, 'stephanos@steveco.com', 'St. Stefan University');
            expect(testIntern.getName()).toBe('Stephanos');
        });
    });

    describe("getId method", () => {
        it("returns Intern ID", () => {
            const testIntern = new Intern('Stephanos', 1, 'stephanos@steveco.com', 'St. Stefan University');
            expect(testIntern.getId()).toBe(1);
        });
    });

    describe("getEmail method", () => {
        it("returns Intern email", () => {
            const testIntern = new Intern('Stephanos', 1, 'stephanos@steveco.com', 'St. Stefan University');
            expect(testIntern.getEmail()).toBe('stephanos@steveco.com');
        });
    });

    describe("getRole method", () => {
        it("returns Intern name", () => {
            const testIntern = new Intern('Stephanos', 1, 'stephanos@steveco.com', 'St. Stefan University');
            expect(testIntern.getRole()).toBe('Intern');
        });
    });

    describe("getSchool method", () => {
        it("returns Intern school name", () => {
            const testIntern = new Intern('Stephanos', 1, 'stephanos@steveco.com', 'St. Stefan University');
            expect(testIntern.getSchool()).toBe('St. Stefan University');
        });
    });
});