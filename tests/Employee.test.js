const Employee = require("../Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("returns employee name", () => {
            const testEmployee = new Employee('Steve', 1, 'steve@steveco.com');
            expect(testEmployee.getName().toBe('Steve'));
        });
    });
});